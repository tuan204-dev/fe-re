'use client'
import { JobType, RecruitingProgress, RecruitingProgressLabel, RecruitingStatus } from '@/constants/enum'
import { useRecruiting } from '@/hooks/job'
import { useAppSelector } from '@/redux/store'
import { IRecruiting } from '@/types/job'
import { formatNumber } from '@/utils/number'
import { formatTime } from '@/utils/time'
import { Tag } from 'antd'
import { useMemo } from 'react'
import { FaCalendarAlt, FaChevronDown, FaDollarSign, FaFilter, FaMapMarkerAlt, FaSearch, FaSort, FaUsers } from 'react-icons/fa'
import WorkerCard from './WorkerCard'

const MainChat = () => {
    const selectedJob = useAppSelector(state => state.job.selectedJob)

    const { recruiting } = useRecruiting(selectedJob?._id || '')

    const recruitingData = useMemo(() => {
        const result = {
            [RecruitingProgress.APPLIED]: [] as IRecruiting[],
            [RecruitingProgress.DOCUMENT_READING]: [] as IRecruiting[],
            [RecruitingProgress.INTERVIEW]: [] as IRecruiting[],
            [RecruitingProgress.TECH_ASSESSMENT]: [] as IRecruiting[],
            [RecruitingProgress.OFFER]: [] as IRecruiting[],
            [RecruitingProgress.HIRED]: [] as IRecruiting[],
            [RecruitingProgress.REJECTED]: [] as IRecruiting[],
        }

        recruiting.forEach(item => {
            result[item.progress].push(item)
        })

        return result
    }, [recruiting])

    const jobStatusData = useMemo(() => {
        switch (selectedJob?.recruitingStatus) {
            case RecruitingStatus.DRAFT:
                return {
                    label: 'Draft',
                    color: 'default'
                }
            case RecruitingStatus.PUBLIC:
                return {
                    label: 'Public',
                    color: 'blue'
                }
            case RecruitingStatus.PAUSED:
                return {
                    label: 'Paused',
                    color: 'yellow'
                }
            case RecruitingStatus.CLOSED:
                return {
                    label: 'Closed',
                    color: 'red'
                }
        }
    }, [selectedJob?.recruitingStatus])

    const jobTypeData = useMemo(() => {
        switch (selectedJob?.jobType) {
            case JobType.FULL_TIME:
                return {
                    label: 'Full Time',
                    color: 'blue'
                }
            case JobType.PART_TIME:
                return {
                    label: 'Part Time',
                    color: 'green'
                }
            case JobType.FREELANCE:
                return {
                    label: 'Freelance',
                    color: 'purple'
                }
            case JobType.CONTRACT:
                return {
                    label: 'Contract',
                    color: 'orange'
                }
        }
    }, [selectedJob?.jobType])


    if (!selectedJob) {
        return (
            <div className="flex-1 flex items-center justify-center text-gray-500">
                <p className="text-lg">Select a job to view details</p>
            </div>
        )
    }

    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-white border-b border-gray-200 p-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            {selectedJob.title}
                        </h2>
                        <p className="text-gray-600 mt-1 line-clamp-2">
                            {selectedJob.description}
                        </p>
                    </div>
                    <div className='flex items-center gap-x-[6px]'>
                        <Tag color={jobStatusData?.color} className='rounded-full'>{jobStatusData?.label}</Tag>
                        <Tag color={jobTypeData?.color} className='rounded-full'>{jobTypeData?.label}</Tag>
                    </div>
                </div>
                <div className="flex flex-wrap items-center mt-4 text-sm text-gray-600">
                    <div className="flex items-center mr-4 mb-2">
                        <FaDollarSign className="mr-1 text-gray-500" />
                        <span>${formatNumber(selectedJob.salaryRange.min)} - ${formatNumber(selectedJob.salaryRange.max)}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                        <FaMapMarkerAlt className="mr-1 text-gray-500" />
                        <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                        <FaUsers className="mr-1 text-gray-500" />
                        <span>24 applicants</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                        <FaCalendarAlt className="mr-1 text-gray-500" />
                        <span>Posted {formatTime(String(selectedJob.createdAt))}</span>
                    </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Search candidates..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <div className="flex space-x-2 ml-4">
                        <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm flex items-center hover:bg-gray-50">
                            <FaFilter className="mr-1 text-gray-500" />
                            <span>Filter</span>
                        </button>
                        <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm flex items-center hover:bg-gray-50">
                            <FaSort className="mr-1 text-gray-500" />
                            <span>Sort</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.APPLIED]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.APPLIED].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.APPLIED].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.DOCUMENT_READING]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.DOCUMENT_READING].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.DOCUMENT_READING].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.INTERVIEW]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.INTERVIEW].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.INTERVIEW].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.TECH_ASSESSMENT]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.TECH_ASSESSMENT].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.TECH_ASSESSMENT].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.OFFER]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.OFFER].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.OFFER].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.HIRED]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.HIRED].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.HIRED].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="font-medium text-gray-800">{RecruitingProgressLabel[RecruitingProgress.REJECTED]}</h3>
                            <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                {recruitingData[RecruitingProgress.REJECTED].length ?? 0} candidates
                            </span>
                        </div>
                        <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                    </div>
                    <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {
                                recruitingData[RecruitingProgress.REJECTED].map((item) => (
                                    <WorkerCard key={item._id} recruiting={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainChat