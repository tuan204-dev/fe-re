import { IMessage } from '@/types/job'
import { formatTime } from '@/utils/time'
import React, { FC } from 'react'

interface MessageItemProps {
    message: IMessage
}

const ReceiverMessage: FC<MessageItemProps> = ({ message }) => {
    return (
        <div className="flex">
            <div className="flex-shrink-0 mr-3">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://avatar.iran.liara.run/public/35"
                    alt="Sarah Johnson"
                />
            </div>
            <div className='max-w-[70%]'>
                <div className="w-fit bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2 flex flex-col">
                    <p className=''>
                        {message?.content}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 whitespace-nowrap w-fit">{formatTime(String(message?.createdAt))}</p>
                </div>
            </div>
        </div>
    )
}

export default ReceiverMessage