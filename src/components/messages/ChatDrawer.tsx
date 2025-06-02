
'use client'
import { Drawer } from 'antd'
import { FC } from 'react'
import { GoPaperclip } from 'react-icons/go'

interface ChatDrawerProps {
    isOpen: boolean
    onClose: () => void
}

const ChatDrawer: FC<ChatDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <Drawer open={isOpen} width={800} onClose={onClose}>
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
                {/* Job Summary */}
                {/* <div className="p-6 border-b border-gray-200">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-x-[6px]'>
                            <Tag color='green' className='rounded-full'>Remote</Tag>
                            <Tag color='blue' className='rounded-full'>Full time</Tag>
                            <Tag color='red' className='rounded-full'>Urgent</Tag>
                        </div>

                        <button disabled={isTogglingBookmark} className='text-primary text-lg' onClick={handleBookmarkToggle}>
                            {
                                isBookmarked ? <FaBookmark /> : <FaRegBookmark />
                            }
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">
                        {job?.title}
                    </h2>
                    <div className="text-blue-600 font-medium text-lg mt-2">
                        ${formatNumber(job?.salaryRange?.min ?? 0)} - ${formatNumber(job?.salaryRange?.max ?? 0)}
                    </div>
                    <div className="flex items-center gap-x-4 text-sm text-gray-500 mt-2">
                        <div className="flex gap-x-2 items-center">
                            <FaMapMarkerAlt /> {job?.location}
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FaUserTie /> {job?.recruiter?.firstName}
                        </div>
                    </div>
                </div> */}
                {/* Messages Thread */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4 max-w-[900px] mx-auto">
                    {/* Recruiter Message */}
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://avatar.iran.liara.run/public/35"
                                alt="Sarah Johnson"
                            />
                        </div>
                        <div>
                            <div className="max-w-[70%] bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2">
                                <p>
                                    Hi Alex! We re really impressed with your portfolio and experience
                                    at DesignCo. Would you be available for a quick call this week to
                                    discuss the Senior UX Designer role?
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Tue 10:32 AM</p>
                            </div>
                        </div>
                    </div>
                    {/* Candidate Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>
                                Hi Sarah, thanks for reaching out! Id be happy to chat. How about
                                Thursday afternoon? Im available between 2-4pm PST.
                            </p>
                            <p className="text-xs text-blue-100 mt-1">Tue 11:45 AM</p>
                        </div>
                    </div>
                    {/* Recruiter Message */}
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://avatar.iran.liara.run/public/35"
                                alt="Sarah Johnson"
                            />
                        </div>
                        <div>
                            <div className="max-w-[70%] bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2">
                                <p>
                                    Thursday at 2:30pm works perfectly! Ill send you a calendar
                                    invite with the Zoom link shortly.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Tue 12:15 PM</p>
                            </div>
                        </div>
                    </div>
                    {/* Recruiter Message */}
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://avatar.iran.liara.run/public/35"
                                alt="Sarah Johnson"
                            />
                        </div>
                        <div>
                            <div className="max-w-[70%] bg-[#f3f4f6] text-[#111827] rounded-[18px] rounded-ss-none px-4 py-2">
                                <p>
                                    Before our call, could you share 1-2 case studies that highlight
                                    your design process from research to implementation? Particularly
                                    interested in your enterprise SaaS experience.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Tue 12:18 PM</p>
                            </div>
                        </div>
                    </div>
                    {/* Candidate Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>
                                Absolutely! Ill send over two relevant case studies today. One is
                                for a financial dashboard redesign and the other is for a mobile
                                onboarding flow optimization.
                            </p>
                            <p className="text-xs text-blue-100 mt-1">Tue 1:22 PM</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>
                                Absolutely! Ill send over two relevant case studies today. One is
                                for a financial dashboard redesign and the other is for a mobile
                                onboarding flow optimization.
                            </p>
                            <p className="text-xs text-blue-100 mt-1">Tue 1:23 PM</p>
                        </div>
                    </div>
                    {/* System Message */}
                    <div className="text-center text-xs text-gray-500 my-4">
                        <span className="bg-gray-100 px-2 py-1 rounded">Today</span>
                    </div>
                    {/* Candidate Message */}
                    <div className="flex justify-end">
                        <div className="max-w-[70%] bg-[#3b82f6] text-white rounded-[18px] rounded-ee-none px-4 py-2">
                            <p>Here are the case studies I mentioned</p>
                            <p className="text-xs text-blue-100 mt-1">Today 9:15 AM</p>
                        </div>
                    </div>
                </div>
                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 max-w-[900px] mx-auto w-full">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
                            <GoPaperclip />
                        </button>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Drawer>
    )
}

export default ChatDrawer