import { IJob } from "@/types/job"
import axiosInstance from "./axios"
import { ApiResponse } from "@/types/common"


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

const getJobs = async () => {
    const { data } = await axiosInstance.get<ApiResponse<IJob[]>>('/job')

    return data.data
}

const JobService = { createJob, getJobs, publicJob, pauseJob, closeJob }

export default JobService