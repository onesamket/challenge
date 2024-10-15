import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from 'lucide-react'
import Image, { StaticImageData } from "next/image"
import React from 'react'

interface StatItem {
    icon: StaticImageData
    value: string
    trend?: 'up' | 'down'
}

interface StatRowProps {
    avatar: string
    username: string
    stats: StatItem[]
    action?: {
        label: string
        onClick: () => void
    }
    badge?: string
}

export const StatRow: React.FC<StatRowProps> = ({ avatar, username, stats, action, badge }) => {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src={avatar} alt={username} />
                        <AvatarFallback>{username[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-white">{username}</span>
                </div>
            </div>
        </div>
    )
}
