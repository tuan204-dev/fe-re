import { IMessage } from '@/types/job'
import { formatTime } from '@/utils/time'
import React, { FC } from 'react'

interface MessageItemProps {
    message: IMessage
}

const SenderMessage: FC<MessageItemProps> = ({ message }) => {
    return (
        <div className="flex justify-end">
            <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                <p className=''>
                    {message?.content}
                </p>
                <p className="text-xs text-blue-100 mt-1">{formatTime(String(message.createdAt))}</p>
            </div>
        </div>
    )
}

export default SenderMessage