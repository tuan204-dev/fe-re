import JobService from '@/services/jobServices';
import { scrollToLastMessage } from '@/utils/scrollTo';
import React, { FC, useState } from 'react';
import { GoPaperclip } from 'react-icons/go';

interface ChatInputProps {
    refreshMessages?: () => void;
    recruitingId?: string;
}

const ChatInput: FC<ChatInputProps> = ({ recruitingId, refreshMessages }) => {
    const [value, setValue] = useState<string>('');

    const handleSend = async () => {
        const cleanedValue = value.trim();

        if (!cleanedValue || !recruitingId) {
            return;
        }

        await JobService.sendMessage(recruitingId, cleanedValue);
        setValue('');
        refreshMessages?.();
        scrollToLastMessage();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="p-4 border-t border-gray-200 max-w-[900px] mx-auto w-full">
            <div className="flex items-center space-x-2">
                {/* <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
                    <GoPaperclip />
                </button> */}
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </div>
                <button
                    onClick={handleSend}
                    disabled={!value.trim()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
