import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'



type SkinCardProps = {
    name: string
    image: any
    rating: number
    index: number,
    onSelect?: () => void
}

export const SkinCard = ({ image, name, rating, index, onSelect }: SkinCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#2b3034] mt-4 rounded-xl flex flex-col items-center"
            onClick={onSelect}
        >
            <div className="relative w-full h-32">
                <Image src={image} alt={name} className="absolute w-full h-56 -top-10" />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-opacity-30 backdrop-blur-md rounded-xl p-4 w-full text-center"
            >
                <p className="text-sm font-medium mb-1">{name}</p>
                <div className="flex justify-center">
                    {Array.from({ length: rating }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <Star className="w-4 h-4 text-cyan-400 fill-current" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}