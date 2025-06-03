import { IJob, IRecruiting, IRecruitingDetail } from '@/types/job';
import axiosInstance from './axios';
import { ApiResponse } from '@/types/common';
import { truncateParams } from '@/utils/truncateParams';

const createJob = async (jobData: IJob) => {
    const { data } = await axiosInstance.post<ApiResponse<IJob>>('/job', jobData);

    return data.data;
};

const publicJob = async (jobId: string) => {
    await axiosInstance.post(`/job/${jobId}/public`);
};

const pauseJob = async (jobId: string) => {
    await axiosInstance.post(`/job/${jobId}/pause`);
};

const closeJob = async (jobId: string) => {
    await axiosInstance.post(`/job/${jobId}/close`);
};

const getJobs = async (params?: any) => {
    const { data } = await axiosInstance.get<ApiResponse<IJob[]>>('/job' + truncateParams(params));

    return data.data;
};

const getAllRecruiting = async (jobId: string) => {
    if (!jobId) {
        return [];
    }

    const { data } = await axiosInstance.get<ApiResponse<IRecruiting[]>>(`/job/${jobId}/recruiting`);

    return data.data;
};

const getRecruitingDetail = async (recruitingId: string) => {
    if (!recruitingId) {
        return {};
    }
    const { data } = await axiosInstance.get<ApiResponse<IRecruitingDetail>>(`/recruiting/${recruitingId}`);

    return data.data;
};

const sendMessage = async (recruitingId: string, content: string) => {
    const { data } = await axiosInstance.post(`/recruiting/recruiter`, { recruitingId, content });

    return data;
};

const upProgress = async (recruitingId: string) => {
    await axiosInstance.post(`/job/recruiting/${recruitingId}/up`);
};

const rejectRecruiting = async (recruitingId: string) => {
    await axiosInstance.post(`/job/recruiting/${recruitingId}/reject`);
};

const JobService = {
    createJob,
    getJobs,
    publicJob,
    pauseJob,
    closeJob,
    getAllRecruiting,
    getRecruitingDetail,
    sendMessage,
    upProgress,
    rejectRecruiting,
};

export default JobService;
