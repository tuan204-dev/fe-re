import { IJob, IRecruiting } from "@/types/job"
import axiosInstance from "./axios"
import { ApiResponse } from "@/types/common"
import { truncateParams } from "@/utils/truncateParams"


const createJob = async (jobData: IJob) => {
    const { data } = await axiosInstance.post<ApiResponse<IJob>>('/job', jobData)

    return data.data
}

const publicJob = async (jobId: string) => {
    await axiosInstance.post(`/job/${jobId}/public`)
}

const pauseJob = async (jobId: string) => {
    await axiosInstance.post(`/job/${jobId}/pause`)
}

const closeJob = async (jobId: string) => {
    await axiosInstance.post(`/job/${jobId}/close`)
}

const getJobs = async (params?: any) => {
    console.log('getJobs', params)
    const { data } = await axiosInstance.get<ApiResponse<IJob[]>>('/job' + truncateParams(params))

    return data.data
}

const getAllRecruiting = async (jobId: string) => {
    const { data } = await axiosInstance.get<ApiResponse<IRecruiting[]>>(`/job/${jobId}/recruiting`)

    return data.data;
}

const JobService = { createJob, getJobs, publicJob, pauseJob, closeJob, getAllRecruiting }

export default JobService