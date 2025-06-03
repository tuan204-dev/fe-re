import { RecruitingStatus } from '@/constants/enum';
import { useAppSelector } from '@/redux/store';
import { IJob } from '@/types/job';
import cn from '@/utils/cn';
import { Tag } from 'antd';
import React, { FC, useMemo } from 'react';
import { FaUsers } from 'react-icons/fa';

interface JobCardProps {
    job: IJob;
    onClick?: (job: IJob) => void;
}

const JobCard: FC<JobCardProps> = ({ job, onClick }) => {
    const selectedJob = useAppSelector((state) => state.job.selectedJob);
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

    const handleClick = () => {
        onClick?.(job);
    };

    return (
        <div
            onClick={handleClick}
            className={cn(
                'job-card bg-white p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-blue-50 transition-colors duration-200',
                {
                    'border-blue-500 bg-blue-50': selectedJob?._id === job._id,
                }
            )}
        >
            <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800">{job.title}</h3>
                <Tag color={jobStatusData?.color} className="rounded-full">
                    {jobStatusData?.label}
                </Tag>
            </div>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{job.description || 'No description available.'}</p>
            {/* <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                    <FaUsers className="text-gray-400 mr-1 text-xs" />
                    <span className="text-xs text-gray-600">24 applicants</span>
                    <div className="w-2 h-2 bg-red-500 rounded-full ml-2" />
                </div>
                <span className="text-xs text-gray-500">Updated 2h ago</span>
            </div> */}
        </div>
    );
};

export default JobCard;
