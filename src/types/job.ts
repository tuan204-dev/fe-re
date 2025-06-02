import { JobType, RecruitingProgress, RecruitingStatus } from "@/constants/enum";
import { IWorker } from "./user";

export interface ISalaryRange {
    min: number;
    max: number;
}

export interface IJob {
    _id?: string
    title: string
    recruitingStatus?: RecruitingStatus
    description: string
    location: string
    salaryRange: ISalaryRange
    jobType: JobType
    recruiterId?: string
    companyId?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IRecruiting {
    _id?: string
    jobId?: string
    job?: IJob
    worker?: IWorker
    progress: RecruitingProgress
    createdAt?: Date
    updatedAt?: Date
}