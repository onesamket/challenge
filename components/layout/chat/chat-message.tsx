
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Icon, { IconName } from '@/components/shared/lucide-icon'
import { Message } from '@/types/skin'



const ChatMessage: React.FC<{ message: Message }> = ({ message }) => (
    <div className="flex space-x-3 p-3 py-6 border-b border-b-slate-600/50">
        <div className='flex flex-col items-center'>
            <Avatar>
                <AvatarImage src={message.user.avatar} alt={message.user.name} />
                <AvatarFallback>{message.user.name[0]}</AvatarFallback>
            </Avatar>
            <Icon name={message.iconName} color={message.iconColor ? message.iconColor : "red"} className="w-5 h-4" />
        </div >
        <div className="flex-1">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{message.user.name}</h3>
                <span className="ml-2 text-xs text-gray-400">{message.timestamp}</span>
            </div>
            <p className="text-gray-300">{message.content}</p>
        </div>
    </div>
)

export default ChatMessage
