import JobCard from '@/components/JobCard';
import Link from 'next/link';
import {
    FaBars,
    FaChevronLeft,
    FaChevronRight,
    FaPlus,
    FaSearch
} from 'react-icons/fa';

const JobPage = () => {
    return (
        <div className="flex-1 overflow-auto">
            {/* Mobile Header */}
            <div className="bg-white shadow-sm p-4 flex items-center justify-between md:hidden">
                <button className="text-gray-500">
                    <FaBars />
                </button>
                <h1 className="text-xl font-bold text-gray-800">Posted Jobs</h1>
                <div className="w-6" />
            </div>
            {/* Dashboard Content */}
            <div className="p-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Job Management</h2>
                        <p className="text-gray-500">Manage all your posted job listings</p>
                    </div>
                    <Link href={'/job/create'} className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors">
                        <FaPlus />
                        <span>Post New Job</span>
                    </Link>
                </div>
                {/* Status Filters */}
                <div className="bg-white rounded-lg shadow-sm p-1 mb-6 overflow-x-auto">
                    <div className="flex space-x-1 min-w-max">
                        <button className="status-filter px-4 py-2 rounded-lg font-medium text-sm bg-blue-50 text-blue-700">
                            All{" "}
                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full ml-1">
                                16
                            </span>
                        </button>
                        <button className="status-filter px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                            Draft{" "}
                            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full ml-1">
                                4
                            </span>
                        </button>
                        <button className="status-filter px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                            Public{" "}
                            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full ml-1">
                                5
                            </span>
                        </button>
                        <button className="status-filter px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                            Paused{" "}
                            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full ml-1">
                                3
                            </span>
                        </button>
                        <button className="status-filter px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100">
                            Closed{" "}
                            <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full ml-1">
                                4
                            </span>
                        </button>
                    </div>
                </div>
                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search jobs by title, keywords..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        </div>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>All Locations</option>
                            <option>New York</option>
                            <option>San Francisco</option>
                            <option>Remote</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option>All Categories</option>
                            <option>Engineering</option>
                            <option>Design</option>
                            <option>Marketing</option>
                        </select>
                    </div>
                </div>
                {/* Job List */}
                <div className="space-y-4 mb-8">
                    {
                        Array(9).fill(0).map((_, index) => (
                            <JobCard key={index} />
                        ))
                    }
                </div>
                {/* Pagination */}
                <div className="flex justify-between items-center">
                    <div className="text-gray-500">Showing 1 to 4 of 16 jobs</div>
                    <nav className="inline-flex rounded-md shadow-sm">
                        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            <FaChevronLeft />
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 border-t border-b border-blue-600 text-sm font-medium">
                            1
                        </button>
                        <button className="bg-white text-gray-500 px-4 py-2 border-t border-b border-gray-300 text-sm font-medium hover:bg-gray-50">
                            2
                        </button>
                        <button className="bg-white text-gray-500 px-4 py-2 border-t border-b border-gray-300 text-sm font-medium hover:bg-gray-50">
                            3
                        </button>
                        <button className="bg-white text-gray-500 px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50">
                            4
                        </button>
                        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            <FaChevronRight />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default JobPage;