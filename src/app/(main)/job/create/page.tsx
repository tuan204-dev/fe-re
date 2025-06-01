'use client'
import { useDistricts, useProvinces, useWards } from '@/hooks/location';
import JobService from '@/services/jobServices';
import LocationServices from '@/services/locationServices';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Radio, Tag } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const schema = z.object({
    title: z.string().min(1, 'Job title is required'),
    description: z.string().min(1, 'Job description is required').max(1000, 'Description cannot exceed 1000 characters'),
    jobType: z.number(),
    location: z.string().min(1, 'Location is required'),
    salaryRange: z.object({
        min: z.string().min(0, 'Minimum salary must be at least 0'),
        max: z.string().min(0, 'Maximum salary must be at least 0')
    })
}).refine(
    (data) => {
        if (!data.salaryRange.min || !data.salaryRange.max) return true;

        const minSalary = Number(data.salaryRange.min);
        const maxSalary = Number(data.salaryRange.max);

        return minSalary <= maxSalary;
    },
    {
        path: ['salaryRange.min', 'salaryRange.max'],
        message: 'Minimum salary must be less than or equal to maximum salary',
    }
)

interface FormData {
    title: string;
    description: string;
    jobType: number;
    location: string;
    salaryRange: {
        min: string;
        max: string;
    };
}

const CreateJobPage = () => {
    const router = useRouter()
    const [selectedProvinceId, setSelectedProvinceId] = useState<string>('');
    const [selectedDistrictId, setSelectedDistrictId] = useState<string>('');
    const [selectedWardId, setSelectedWardId] = useState<string>('');
    const { provinces } = useProvinces()
    const { districts } = useDistricts(selectedProvinceId)
    const { wards } = useWards(selectedDistrictId)
    const { formState: { errors, isSubmitting }, handleSubmit, control, watch, setValue } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            jobType: 0, // Default to Full-time
        }
    })

    const formData = watch()

    const { description } = formData

    const createDraft = async (data: FormData) => {
        return await JobService.createJob({
            title: data.title,
            description: data.description,
            jobType: data.jobType,
            location: data.location,
            salaryRange: {
                min: Number(data.salaryRange.min),
                max: Number(data.salaryRange.max)
            }
        })
    }

    const handlePublish = async (data: FormData) => {
        try {
            const job = await createDraft(data)
            await JobService.publicJob(job._id!)
            toast.success('Job posting created successfully!');
            router.push('/');
        } catch (e) {
            console.error('Error publishing job:', e);
            toast.error('Failed to publish job posting. Please try again later.');
        }
    }

    const handleSavaDraft = async (data: FormData) => {
        try {
            await createDraft(data)

            toast.success('Draft saved successfully!');
            router.push('/');
        } catch (e) {
            console.error('Error publishing job:', e);
            toast.error('Failed to save draft. Please try again later.');
        }
    }

    useEffect(() => {
        (async () => {
            if (!selectedWardId) return;

            const fullLocation = await LocationServices.getFullLocation(selectedWardId);

            setValue('location', fullLocation.full_name);
        })()
    }, [selectedWardId])

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Create New Job Posting</h1>
                <div className="flex space-x-2">
                    <Tag className='rounded-full' color='default'>Draft</Tag>
                </div>
            </div>
            <div>
                {/* Job Basics Section */}
                <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Basics</h2>
                    <div className="mb-5">
                        <label
                            htmlFor="jobTitle"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Job Title *
                        </label>
                        <Controller
                            control={control}
                            name='title'
                            render={({ field }) => (
                                <Input
                                    type="text"
                                    id="jobTitle"
                                    {...field}
                                    name="jobTitle"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g. Senior Frontend Developer"
                                    status={errors.title ? 'error' : undefined}
                                />
                            )}
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="jobDescription"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Job Description *
                        </label>
                        <Controller
                            control={control}
                            name='description'
                            render={({ field }) => (
                                <Input.TextArea
                                    {...field}
                                    id="jobDescription"
                                    name="jobDescription"
                                    rows={6}
                                    maxLength={1000}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Describe the responsibilities, requirements, and benefits of this position"
                                    status={errors.description ? 'error' : undefined}
                                />
                            )}
                        />
                        <div id="charCount" className="text-xs text-[#6b7280] mt-1 text-right">
                            {description?.length ?? 0} / 1000
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Type *
                        </label>
                        <div className="flex flex-wrap gap-3">
                            <Controller
                                control={control}
                                name='jobType'
                                render={({ field }) => (
                                    <Radio.Group
                                        {...field}
                                        options={[
                                            {
                                                value: 0,
                                                label: 'Full-time',
                                            },
                                            {
                                                value: 1,
                                                label: 'Part-time',
                                            },
                                            {
                                                value: 2,
                                                label: 'Freelance',
                                            },
                                            {
                                                value: 3,
                                                label: 'Contract',
                                            },
                                        ]}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Application Period Section */}
                {/* <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Application Period
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="startDate"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Start Date *
                            </label>
                            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} size='large' className='w-full' />
                        </div>
                        <div>
                            <label
                                htmlFor="endDate"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                End Date *
                            </label>
                            <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} size='large' className='w-full' />
                        </div>
                    </div>
                </div> */}

                {/* Location Section */}
                <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Location</h2>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Address
                        </label>
                        <Controller
                            control={control}
                            name='location'
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Street name, building, etc."
                                    status={errors.location ? 'error' : undefined}
                                />
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="province"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Province
                            </label>
                            <select
                                id="province"
                                name="province"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedProvinceId(value);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option hidden value="">Select province</option>
                                {
                                    provinces?.map((province) => (
                                        <option key={province.id} value={province.id}>{province.full_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="district"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                District
                            </label>
                            <select
                                id="district"
                                name="district"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedDistrictId(value);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="" hidden>Select district</option>
                                {
                                    districts?.map((district) => (
                                        <option key={district.id} value={district.id}>{district.full_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="ward"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Ward
                            </label>
                            <select
                                id="ward"
                                name="ward"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedWardId(value);
                                }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="" hidden>Select ward</option>
                                {
                                    wards?.map((ward) => (
                                        <option key={ward.id} value={ward.id}>{ward.full_name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                {/* Salary Section */}
                <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Salary Range</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="salaryFrom"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                From
                            </label>
                            <Controller
                                control={control}
                                name='salaryRange.min'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type='number'
                                        className='w-full'
                                        size='large'
                                        status={errors.salaryRange?.min ? 'error' : undefined}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="salaryTo"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                To
                            </label>
                            <Controller
                                control={control}
                                name='salaryRange.max'
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        type='number'
                                        className='w-full'
                                        size='large'
                                        status={errors.salaryRange?.max ? 'error' : undefined}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
                    <button
                        disabled={isSubmitting}
                        onClick={handleSubmit(handleSavaDraft)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save Draft
                    </button>
                    <button
                        disabled={isSubmitting}
                        onClick={handleSubmit(handlePublish)}
                        className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Publish Job
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateJobPage