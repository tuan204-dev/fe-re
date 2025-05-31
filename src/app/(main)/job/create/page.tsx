'use client'
import dayjs from 'dayjs';
import { DatePicker, Input, Radio, Select, Tag } from 'antd'
import React from 'react'

const dateFormat = 'YYYY/MM/DD';

const CreateJobPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-800">Create New Job Posting</h1>
                <div className="flex space-x-2">
                    <Tag className='rounded-full' color='default'>Draft</Tag>
                </div>
            </div>
            <form id="jobForm">
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
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Senior Frontend Developer"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="jobDescription"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Job Description *
                        </label>
                        <textarea
                            id="jobDescription"
                            name="jobDescription"
                            rows={6}
                            maxLength={1000}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Describe the responsibilities, requirements, and benefits of this position"
                        />
                        <div id="charCount" className="text-xs text-[#6b7280] mt-1 text-right">
                            0 / 1000
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label
                                htmlFor="jobLevel"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Job Level *
                            </label>
                            <select
                                id="jobLevel"
                                name="jobLevel"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select job level
                                </option>
                                <option value="entry">Entry Level</option>
                                <option value="mid">Mid Level</option>
                                <option value="senior">Senior Level</option>
                                <option value="executive">Executive</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="yearsExperience"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Minimum Years of Experience
                            </label>
                            <input
                                type="number"
                                id="yearsExperience"
                                name="yearsExperience"
                                min={0}
                                max={50}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g. 3"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Type *
                        </label>
                        <div className="flex flex-wrap gap-3">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobType"
                                    value="remote"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Remote</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobType"
                                    value="full-time"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Full-time</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobType"
                                    value="part-time"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Part-time</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobType"
                                    value="freelance"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Freelance</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobType"
                                    value="internship"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Internship</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobType"
                                    value="contract"
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-sm text-gray-700">Contract</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Application Period Section */}
                <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
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
                </div>

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
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Street name, building, etc."
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="state"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                State/Province
                            </label>
                            <select
                                id="state"
                                name="state"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="">Select state</option>
                                <option value="california">California</option>
                                <option value="new-york">New York</option>
                                <option value="texas">Texas</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                District/City
                            </label>
                            <select
                                id="city"
                                name="city"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="">Select city</option>
                                <option value="los-angeles">Los Angeles</option>
                                <option value="san-francisco">San Francisco</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="ward"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Ward/Local Area
                            </label>
                            <select
                                id="ward"
                                name="ward"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="">Select ward</option>
                                <option value="downtown">Downtown</option>
                                <option value="silicon-valley">Silicon Valley</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Salary Section */}
                <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Salary Range</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label
                                htmlFor="salaryFrom"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                From
                            </label>
                            <Input
                                type='number'
                                className='w-full'
                                size='large'
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="salaryTo"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                To
                            </label>
                            <Input
                                type='number'
                                className='w-full'
                                size='large'
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="currency"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Currency
                            </label>
                            <Select
                                defaultValue="lucy"
                                className='w-full'
                                size='large'
                                options={[
                                    { value: 'vnd', label: 'VND' },
                                    { value: 'usd', label: 'USD' },
                                ]}
                            />
                        </div>
                    </div>
                </div>

                {/* Candidate Requirements Section */}
                <div className="section-card bg-white rounded-lg p-6 mb-6 shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Candidate Requirements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Gender
                            </label>
                            <Radio.Group
                                // style={style}
                                options={[
                                    { value: 1, label: 'Male' },
                                    { value: 2, label: 'Female' },
                                    { value: 3, label: 'Other' },
                                ]}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Age Range
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="ageFrom" className="sr-only">
                                        From Age
                                    </label>
                                    <input
                                        type="number"
                                        id="ageFrom"
                                        name="ageFrom"
                                        min={18}
                                        max={99}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="From"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="ageTo" className="sr-only">
                                        To Age
                                    </label>
                                    <input
                                        type="number"
                                        id="ageTo"
                                        name="ageTo"
                                        min={18}
                                        max={99}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="To"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label
                            htmlFor="educationLevel"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Minimum Education Required
                        </label>
                        <select
                            id="educationLevel"
                            name="educationLevel"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            defaultValue=""
                        >
                            <option value="">Select education level</option>
                            <option value="high-school">High School or above</option>
                            <option value="associate">Associate Degree</option>
                            <option value="bachelor">Bachelors Degree</option>
                            <option value="master">Masters Degree</option>
                            <option value="doctorate">Doctorate</option>
                        </select>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
                    <button
                        type="button"
                        id="saveDraft"
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Save Draft
                    </button>
                    <button
                        type="button"
                        id="previewBtn"
                        className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Preview
                    </button>
                    <button
                        type="submit"
                        id="publishBtn"
                        className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Publish Job
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateJobPage