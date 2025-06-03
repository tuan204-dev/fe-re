import { IMessage, SENDER_TYPE } from '@/types/job'
import React, { FC } from 'react'
import SenderMessage from './SenderMessage'
import ReceiverMessage from './ReceiverMessage'

interface MessageItemProps {
    message: IMessage
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
    if (message.senderType === SENDER_TYPE.RECRUITER) {
        return <SenderMessage message={message} />
    }

    return (
        <ReceiverMessage message={message} />
    )
}

export default MessageItem