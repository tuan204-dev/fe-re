'use client';
import { useRecruitingDetail } from '@/hooks/job';
import { useAppSelector } from '@/redux/store';
import { Button, Drawer, Tag } from 'antd';
import { FC } from 'react';
import ChatInput from './ChatInput';
import MessageItem from './MessageItem';
import { RecruitingProgress, RecruitingProgressLabel } from '@/constants/enum';
import JobService from '@/services/jobServices';
import toast from 'react-hot-toast';
import useModal from 'antd/es/modal/useModal';

interface ChatDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatDrawer: FC<ChatDrawerProps> = ({ isOpen, onClose }) => {
    const selectedRecruiting = useAppSelector((state) => state.recruiting.selectedRecruiting);
    const [modal, contextHolder] = useModal();

    const { recruitingDetail, mutate: refreshMessages } = useRecruitingDetail(selectedRecruiting?._id || '');

    const handleUpProgress = async () => {
        if (!selectedRecruiting?._id) return;

        try {
            await JobService.upProgress(selectedRecruiting._id);
            await refreshMessages();
            toast.success('Progress updated successfully');
        } catch (e) {
            console.error('Error updating progress:', e);
            toast.error('Failed to update progress');
        }
    };

    const handleRejectRecruiting = async () => {
        if (!selectedRecruiting?._id) return;

        try {
            await JobService.rejectRecruiting(selectedRecruiting._id);
            await refreshMessages();
            toast.success('Recruiting rejected successfully');
        } catch (e) {
            console.error('Error rejecting recruiting:', e);
            toast.error('Failed to reject recruiting');
        }
    };

    const handleClickReject = async () => {
        modal.confirm({
            title: 'Are you sure you want to reject this recruiting?',
            content: 'This action cannot be undone.',
            onOk: handleRejectRecruiting,
            onCancel: () => {
                console.log('Reject cancelled');
            },
        });
    };

    return (
        <Drawer
            open={isOpen}
            width={800}
            onClose={onClose}
            classNames={{
                body: '!p-0'
            }}
            title={
                <div className="flex items-center justify-between">
                    <Tag color={recruitingDetail?.progress === -1 ? 'red' : 'blue'}>
                        {RecruitingProgressLabel[recruitingDetail?.progress]}
                    </Tag>
                    <div className="flex items-center gap-x-3">
                        <Button
                            type="primary"
                            onClick={handleUpProgress}
                            disabled={[RecruitingProgress.HIRED, RecruitingProgress.REJECTED].includes(
                                recruitingDetail?.progress
                            )}
                        >
                            Up
                        </Button>
                        <Button
                            danger
                            onClick={handleClickReject}
                            disabled={recruitingDetail?.progress === RecruitingProgress.REJECTED}
                        >
                            Reject
                        </Button>
                    </div>
                </div>
            }
        >
            {contextHolder}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
                {/* Messages Thread */}
                <div
                    className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4 max-w-[900px] mx-auto w-full"
                    id="conversation-wrapper"
                >
                    {recruitingDetail?.messages?.map((message) => <MessageItem key={message._id} message={message} />)}
                    <div id="last-message"></div>
                </div>
                {/* Message Input */}
                <ChatInput refreshMessages={refreshMessages} recruitingId={selectedRecruiting?._id || ''} />
            </div>
        </Drawer>
    );
};

export default ChatDrawer;
