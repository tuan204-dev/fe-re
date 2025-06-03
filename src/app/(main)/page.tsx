'use client';
import JobCard from '@/components/JobCard';
import { RecruitingStatus } from '@/constants/enum';
import { useJobs } from '@/hooks/job';
import cn from '@/utils/cn';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FaBars, FaPlus, FaSearch } from 'react-icons/fa';

const JobPage = () => {
    const [activeStatus, setActiveStatus] = useState(-1);
    const { jobs, mutate: refreshJobs } = useJobs();

    const jobStatusTabs = [
        {
            label: 'All',
            count: jobs.length,
            status: -1,
        },
        {
            label: 'Draft',
            count: jobs.filter((job) => job.recruitingStatus === RecruitingStatus.DRAFT).length,
            status: RecruitingStatus.DRAFT,
        },
        {
            label: 'Public',
            count: jobs.filter((job) => job.recruitingStatus === RecruitingStatus.PUBLIC).length,
            status: RecruitingStatus.PUBLIC,
        },
        {
            label: 'Paused',
            count: jobs.filter((job) => job.recruitingStatus === RecruitingStatus.PAUSED).length,
            status: RecruitingStatus.PAUSED,
        },
        {
            label: 'Closed',
            count: jobs.filter((job) => job.recruitingStatus === RecruitingStatus.CLOSED).length,
            status: RecruitingStatus.CLOSED,
        },
    ];

    const renderedJobs = useMemo(() => {
        if (activeStatus === -1) {
            return jobs;
        }
        return jobs.filter((job) => job.recruitingStatus === activeStatus);
    }, [jobs, activeStatus]);

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
                    <Link
                        href={'/job/create'}
                        className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors"
                    >
                        <FaPlus />
                        <span>Post New Job</span>
                    </Link>
                </div>
                {/* Status Filters */}
                <div className="bg-white rounded-lg shadow-sm p-1 mb-6 overflow-x-auto">
                    <div className="flex space-x-1 min-w-max">
                        {jobStatusTabs.map((tab) => (
                            <button
                                key={tab.status}
                                onClick={() => setActiveStatus(tab.status)}
                                className={cn('px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100', {
                                    'bg-blue-50 text-blue-700': activeStatus === tab.status,
                                })}
                            >
                                {tab.label}{' '}
                                <span
                                    className={cn('bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full ml-1', {
                                        'bg-blue-100': activeStatus === tab.status,
                                    })}
                                >
                                    {tab.count}
                                </span>
                            </button>
                        ))}
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
                    </div>
                </div>
                {/* Job List */}
                <div className="space-y-4 mb-8">
                    {renderedJobs.map((job) => (
                        <JobCard key={job._id} job={job} refresh={refreshJobs} />
                    ))}
                </div>
                {/* Pagination */}
                {/* <div className="flex justify-between items-center">
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
                </div> */}
            </div>
        </div>
    );
};

export default JobPage;
