import { JobType, RecruitingStatus } from '@/constants/enum';
import JobService from '@/services/jobServices';
import { IJob } from '@/types/job';
import { formatNumber } from '@/utils/number';
import { formatTime } from '@/utils/time';
import { Tag } from 'antd';
import { FC, useMemo } from 'react';
import toast from 'react-hot-toast';
import { FaCalendar, FaDollarSign, FaEdit, FaEnvelope, FaPause, FaTrash } from 'react-icons/fa';
import { MdPublish } from 'react-icons/md';

interface JobCardProps {
    job: IJob;
    refresh?: () => void;
}

const JobCard: FC<JobCardProps> = ({ job, refresh }) => {
    const jobStatusData = useMemo(() => {
        switch (job.recruitingStatus) {
            case RecruitingStatus.DRAFT:
                return {
                    label: 'Draft',
                    color: 'default',
                };
            case RecruitingStatus.PUBLIC:
                return {
                    label: 'Public',
                    color: 'blue',
                };
            case RecruitingStatus.PAUSED:
                return {
                    label: 'Paused',
                    color: 'yellow',
                };
            case RecruitingStatus.CLOSED:
                return {
                    label: 'Closed',
                    color: 'red',
                };
        }
    }, [job.recruitingStatus]);

    const jobTypeData = useMemo(() => {
        switch (job.jobType) {
            case JobType.FULL_TIME:
                return {
                    label: 'Full Time',
                    color: 'blue',
                };
            case JobType.PART_TIME:
                return {
                    label: 'Part Time',
                    color: 'green',
                };
            case JobType.FREELANCE:
                return {
                    label: 'Freelance',
                    color: 'purple',
                };
            case JobType.CONTRACT:
                return {
                    label: 'Contract',
                    color: 'orange',
                };
        }
    }, [job.jobType]);

    const handlePublicJob = async () => {
        await JobService.publicJob(job._id as string);
        refresh?.();
        toast.success('Job is now public');
    };

    const handlePauseJob = async () => {
        await JobService.pauseJob(job._id as string);
        refresh?.();
        toast.success('Job is now paused');
    };

    const handleCloseJob = async () => {
        await JobService.closeJob(job._id as string);
        refresh?.();
        toast.success('Job is now closed');
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-x-[6px]">
                                <Tag color={jobStatusData?.color} className="rounded-full">
                                    {jobStatusData?.label}
                                </Tag>
                                <Tag color={jobTypeData.color} className="rounded-full">
                                    {jobTypeData.label}
                                </Tag>
                                {/* <Tag color='red' className='rounded-full'>Urgent</Tag> */}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mt-2">{job.title}</h3>
                            <p className="text-gray-500 mt-1">{job.description}</p>
                        </div>
                        <div className="flex gap-2">
                            {job.recruitingStatus !== RecruitingStatus.CLOSED && (
                                <button className="text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50">
                                    <FaEdit />
                                </button>
                            )}
                            {[RecruitingStatus.DRAFT, RecruitingStatus.PAUSED].includes(job?.recruitingStatus ?? 0) && (
                                <button
                                    onClick={handlePublicJob}
                                    className="text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 text-xl"
                                >
                                    <MdPublish />
                                </button>
                            )}
                            {job?.recruitingStatus === RecruitingStatus.PUBLIC && (
                                <button
                                    onClick={handlePauseJob}
                                    className="text-gray-400 hover:text-yellow-600 p-2 rounded-full hover:bg-yellow-50"
                                >
                                    <FaPause />
                                </button>
                            )}
                            {job.recruitingStatus !== RecruitingStatus.CLOSED && (
                                <button
                                    onClick={handleCloseJob}
                                    className="text-gray-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50"
                                >
                                    <FaTrash />
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center text-gray-600">
                            <FaDollarSign className="mr-2 text-gray-400" />
                            <span>
                                ${formatNumber(job.salaryRange.min)} - ${formatNumber(job.salaryRange.max)}/month
                            </span>
                        </div>
                        {/* <div className="flex items-center text-gray-600">
                            <FaUsers className="mr-2 text-gray-400" />
                            <span>24 applicants</span>
                        </div> */}
                        <div className="flex items-center text-blue-600">
                            <FaEnvelope className="mr-2" />
                            <span>5 messages pending</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            <FaCalendar className="mr-2 text-gray-400" />
                            <span>Posted: {formatTime(String(job.createdAt))}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
