import { Tag } from 'antd'
import React from 'react'
import { FaUsers } from 'react-icons/fa'

const JobCard = () => {
    return (
        <div className="job-card bg-white p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors duration-200 active-job">
            <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800">
                    Product Manager
                </h3>
                <Tag color='blue' className='rounded-full'>Public</Tag>
            </div>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Lead product development from conception to launch for our SaaS platform.
            </p>
            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                    <FaUsers className="text-gray-400 mr-1 text-xs" />
                    <span className="text-xs text-gray-600">24 applicants</span>
                    <div className="w-2 h-2 bg-red-500 rounded-full ml-2" />
                </div>
                <span className="text-xs text-gray-500">Updated 2h ago</span>
            </div>
        </div>
    )
}

export default JobCard