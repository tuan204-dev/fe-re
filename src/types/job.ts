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
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
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

export enum SENDER_TYPE {
    WORKER = 'worker',
    RECRUITER = 'recruiter',
}

export interface IMessage {
    _id?: string
    senderType: SENDER_TYPE
    content: string
    createdAt: Date
}
export interface IRecruitingDetail {
    _id: string
    progress: RecruitingProgress
    readMessageId: string | null
    messages: IMessage[]
    lastMessage: IMessage
    createdAt: Date
    updatedAt: Date
    job: IJob
    worker: IWorker
}