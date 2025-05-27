import { Tag } from 'antd';
import {
    FaCalendar,
    FaDollarSign,
    FaEdit,
    FaEnvelope,
    FaPause,
    FaTrash,
    FaUsers
} from 'react-icons/fa';

const JobCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className='flex items-center gap-x-[6px]'>
                                <Tag color='blue' className='rounded-full'>Public</Tag>
                                <Tag color='green' className='rounded-full'>Remote</Tag>
                                {/* <Tag color='blue' className='rounded-full'>Full time</Tag> */}
                                <Tag color='red' className='rounded-full'>Urgent</Tag>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mt-2">
                                Product Manager
                            </h3>
                            <p className="text-gray-500 mt-1">
                                Lead product development from conception to launch for our SaaS
                                platform.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50">
                                <FaEdit />
                            </button>
                            <button className="text-gray-400 hover:text-yellow-600 p-2 rounded-full hover:bg-yellow-50">
                                <FaPause />
                            </button>
                            <button className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center text-gray-600">
                            <FaDollarSign className="mr-2 text-gray-400" />
                            <span>$4,500 - $6,000/month</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <FaUsers className="mr-2 text-gray-400" />
                            <span>24 applicants</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                            <FaEnvelope className="mr-2" />
                            <span>5 messages pending</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            <FaCalendar className="mr-2 text-gray-400" />
                            <span>Posted: 3 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard