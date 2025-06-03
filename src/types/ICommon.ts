export interface IResponse<T> {
    success: boolean
    message: string
    data: T
}

export interface IUserPayload {
    id: string
    loginName: string
}