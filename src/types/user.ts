import { Gender } from '@/constants/enum';
import { ISkill } from './skill';

export interface IUser {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    gender: Gender;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IWorker {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
    gender: Gender;
    location?: string;
    avatar?: string;
    education?: string;
    skills?: ISkill[];
    isOpenToOffer?: boolean;
    createdAt: Date;
    updatedAt: Date;
}
