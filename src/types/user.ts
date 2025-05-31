import { Gender } from "@/constants/enum"

export interface IUser {
    _id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
    gender: Gender
    avatar?: string
    createdAt: Date
    updatedAt: Date
}