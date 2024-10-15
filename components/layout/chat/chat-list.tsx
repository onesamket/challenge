
import React from 'react'

import { AnimatePresence } from 'framer-motion'
import ChatMessage from './chat-message'
import { Message, SystemMessage as SystemMessageType } from '@/types/skin'
import SystemMessage from './system-message'


const ChatList: React.FC<{ messages: Message[], systemMessage?: SystemMessageType }> = ({ messages, systemMessage }) => (
    <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
        ))}
        <AnimatePresence>
            {systemMessage && <SystemMessage message={systemMessage} />}
        </AnimatePresence>
    </div>
)

export default ChatList
