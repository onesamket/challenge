"use client"

import { BgImage } from '@/constants/images'
import { skins } from '@/constants/skin-data'
import { Skin } from '@/types/skin'
import { AnimatePresence, motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SearchBar } from './search-bar'
import { SkinCard } from './skin-card'

export default function SkinSelectorSection() {
    const [selectedSkin, setSelectedSkin] = useState<Skin>(skins[0])
    const [filteredSkins, setFilteredSkins] = useState<Skin[]>(skins)
    const [selectedImage, setSelectedImage] = useState<any>(BgImage)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const filtered = skins.filter(skin =>
            skin.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredSkins(filtered)
    }, [searchQuery])

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-lg w-full max-w-4xl mx-auto relative"
        >
            <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-2xl font-bold mb-4 relative z-10"
            >
                Skins List
            </motion.h1>
            <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-2/3 relative h-screen"
                >
                    <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <Image
                            src={selectedImage}
                            alt="Selected Skin"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
                <div className="md:w-1/2 relative z-10">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <SearchBar placeholder='Search Games ...' onSearch={handleSearch} />
                    </motion.div>
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl font-semibold mb-3"
                    >
                        Popular Skins
                    </motion.h2>
                    <AnimatePresence>
                        <div className="relative grid grid-cols-2 gap-4 my-5">
                            {filteredSkins.map((skin, index) => (
                                <SkinCard
                                    key={skin.name}
                                    {...skin}
                                    index={index}
                                    onSelect={() => {
                                        setSelectedImage(skin.image)
                                        setSelectedSkin(skin)
                                    }}
                                />
                            ))}
                        </div>
                    </AnimatePresence>
                </div>
            </div>
            <AnimatePresence>
                {selectedSkin && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 bg-gray-800 bg-opacity-20  backdrop-filter backdrop-blur-sm rounded-lg p-4  z-10"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div className='flex items-center space-x-4'>
                                <h2 className="text-2xl font-bold">{selectedSkin.name}</h2>
                                <div className="flex">
                                    {Array.from({ length: selectedSkin.rating }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <Star className="w-5 h-5 text-cyan-400 fill-current" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
                            >
                                CHOOSE SKIN
                            </motion.button>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm"
                        >
                            <div>
                                <p className="text-gray-400">Type:</p>
                                <p className='text-cyan-600'>Outfit</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Release Date:</p>
                                <p className='text-cyan-600'>Sep 10th, 2019</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Availability:</p>
                                <p className='text-cyan-600'>Shop Now</p>
                            </div>
                            <div>
                                <p className="text-gray-400">Price:</p>
                                <p className='text-cyan-600'>1,200 V-Bucks</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}