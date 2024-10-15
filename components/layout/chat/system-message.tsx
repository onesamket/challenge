
import React from 'react'
import { motion } from 'framer-motion'

interface SystemMessage {
    id: string
    content: string
    timestamp: string
}

const SystemMessage: React.FC<{ message: SystemMessage }> = ({ message }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gray-800 rounded-lg p-3 mb-4 shadow-lg"
    >
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
            </div>
            <div>
                <h4 className="font-semibold text-white">System Message</h4>
                <p className="text-sm text-gray-300">{message.content}</p>
            </div>
        </div>
    </motion.div>
)

export default SystemMessage
