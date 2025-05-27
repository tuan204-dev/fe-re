import JobCard from '@/components/messages/JobCard'
import { Tag } from 'antd'
import Link from 'next/link'
import {
    FaArrowRight,
    FaCalendarAlt,
    FaCheck,
    FaChevronDown,
    FaDollarSign,
    FaEnvelope,
    FaFilter,
    FaMapMarkerAlt,
    FaPlus,
    FaSearch,
    FaSort,
    FaTimes,
    FaUsers
} from 'react-icons/fa'

const MessagePage = () => {
    return (
        <div>
            <div className="flex h-screen overflow-hidden">
                {/* Left Sidebar */}
                <div
                    id="sidebar"
                    className="sidebar bg-white w-80 border-r border-gray-200 flex flex-col"
                >
                    {/* <div className="p-4 border-b border-gray-200">
                        <h1 className="text-xl font-bold text-gray-800">RecruitPro</h1>
                        <p className="text-sm text-gray-500">Manage your candidates</p>
                    </div> */}
                    {/* Search and Filter */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative mb-3">
                            <input
                                type="text"
                                placeholder="Search jobs..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <div className="flex space-x-2">
                            <select className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                                <option>All Status</option>
                                <option>Draft</option>
                                <option>Public</option>
                                <option>Closed</option>
                            </select>
                            <select className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                                <option>All Types</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                            </select>
                        </div>
                    </div>
                    {/* Job List */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide p-2">
                        <div className="space-y-2">
                            {
                                Array(9).fill(0).map((_, index) => (<JobCard key={index} />))
                            }
                        </div>
                    </div>
                    {/* Add New Job Button */}
                    <div className="p-4 border-t border-gray-200">
                        <Link href={'/job/create'} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-200">
                            <FaPlus className="mr-2" />
                            <span>Post New Job</span>
                        </Link>
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Job Header */}
                    <div className="bg-white border-b border-gray-200 p-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Product Manager
                                </h2>
                                <p className="text-gray-600 mt-1">
                                    Lead product development from conception to launch for our SaaS
                                    platform.
                                </p>
                            </div>
                            <div className='flex items-center gap-x-[6px]'>
                                <Tag color='blue' className='rounded-full'>Public</Tag>
                                <Tag color='green' className='rounded-full'>Remote</Tag>
                                {/* <Tag color='blue' className='rounded-full'>Full time</Tag> */}
                                <Tag color='red' className='rounded-full'>Urgent</Tag>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center mt-4 text-sm text-gray-600">
                            <div className="flex items-center mr-4 mb-2">
                                <FaDollarSign className="mr-1 text-gray-500" />
                                <span>$110,000 - $140,000</span>
                            </div>
                            <div className="flex items-center mr-4 mb-2">
                                <FaMapMarkerAlt className="mr-1 text-gray-500" />
                                <span>Remote (US timezone)</span>
                            </div>
                            <div className="flex items-center mr-4 mb-2">
                                <FaUsers className="mr-1 text-gray-500" />
                                <span>24 applicants</span>
                            </div>
                            <div className="flex items-center mr-4 mb-2">
                                <FaCalendarAlt className="mr-1 text-gray-500" />
                                <span>Posted 5 days ago</span>
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
                    {/* Candidates Section */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {/* Applied Stage */}
                        <div className="mb-6">
                            <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                                <div className="flex items-center">
                                    <h3 className="font-medium text-gray-800">Applied</h3>
                                    <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        8 candidates
                                    </span>
                                </div>
                                <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                            </div>
                            <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {/* Candidate Card 1 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium mr-3">
                                                    JD
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">John Doe</h4>
                                                    <p className="text-xs text-gray-500">
                                                        5 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $120,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Last message: 1h ago</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                    {/* Candidate Card 2 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-medium mr-3">
                                                    AS
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Alice Smith</h4>
                                                    <p className="text-xs text-gray-500">3 years in React</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                                    Follow Up
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $110,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Last message: 2h ago</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                    {/* Candidate Card 3 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-medium mr-3">
                                                    MB
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Michael Brown</h4>
                                                    <p className="text-xs text-gray-500">
                                                        7 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                    New
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $135,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Last message: 3h ago</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Document Screening Stage */}
                        <div className="mb-6">
                            <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                                <div className="flex items-center">
                                    <h3 className="font-medium text-gray-800">Document Screening</h3>
                                    <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        5 candidates
                                    </span>
                                </div>
                                <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                            </div>
                            <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {/* Candidate Card 4 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-800 font-medium mr-3">
                                                    RJ
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">
                                                        Robert Johnson
                                                    </h4>
                                                    <p className="text-xs text-gray-500">
                                                        4 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                    Approved
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $125,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Last message: 1d ago</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                    {/* Candidate Card 5 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 font-medium mr-3">
                                                    EW
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Emily Wilson</h4>
                                                    <p className="text-xs text-gray-500">
                                                        6 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                                    Pending
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $130,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Last message: 2d ago</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* First Interview Stage */}
                        <div className="mb-6">
                            <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                                <div className="flex items-center">
                                    <h3 className="font-medium text-gray-800">First Interview</h3>
                                    <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        3 candidates
                                    </span>
                                </div>
                                <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                            </div>
                            <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {/* Candidate Card 6 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium mr-3">
                                                    TD
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Thomas Davis</h4>
                                                    <p className="text-xs text-gray-500">
                                                        8 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                    Scheduled
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $140,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Interview: Tomorrow</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Technical Assessment Stage */}
                        <div className="mb-6">
                            <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                                <div className="flex items-center">
                                    <h3 className="font-medium text-gray-800">Technical Assessment</h3>
                                    <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        2 candidates
                                    </span>
                                </div>
                                <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                            </div>
                            <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {/* Candidate Card 7 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-800 font-medium mr-3">
                                                    SM
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">Sarah Miller</h4>
                                                    <p className="text-xs text-gray-500">
                                                        5 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                    Completed
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $115,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Score: 92/100</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Offer Received Stage */}
                        <div className="mb-6">
                            <div className="stage-header flex justify-between items-center p-3 bg-gray-100 rounded-t-lg cursor-pointer">
                                <div className="flex items-center">
                                    <h3 className="font-medium text-gray-800">Offer Received</h3>
                                    <span className="ml-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        1 candidate
                                    </span>
                                </div>
                                <FaChevronDown className="text-gray-500 transition-transform duration-200" />
                            </div>
                            <div className="stage-content bg-white border border-gray-200 border-t-0 rounded-b-lg p-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {/* Candidate Card 8 */}
                                    <div className="candidate-card bg-white p-3 rounded-lg border border-gray-200 hover:border-blue-300">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-medium mr-3">
                                                    DW
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">David Wilson</h4>
                                                    <p className="text-xs text-gray-500">
                                                        10 years in front-end
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                                                    Negotiating
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-600">
                                                    <FaDollarSign className="mr-1 text-gray-500 inline" />
                                                    $145,000
                                                </p>
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-700">
                                                    <FaEnvelope />
                                                </button>
                                                <button className="text-red-500 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                                <button className="text-green-500 hover:text-green-700">
                                                    <FaCheck />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                                            <span>Offer sent: 3d ago</span>
                                            <button className="text-blue-500 hover:underline">
                                                View Resume
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagePage