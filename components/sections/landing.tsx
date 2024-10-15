"use client"
import { Button } from "@/components/ui/button"
import { GunnerMan } from '@/constants/images'
import { skins } from "@/constants/skin-data"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import DeviceMockup from '../shared/device-mockup'
import { SearchBar } from "../shared/search-bar"
import { SkinCard } from '../shared/skin-card'


export default function LandingPage() {

    const [filteredSkins, setFilteredSkins] = useState(skins)

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
        <div className="min-h-screen text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-20">
                    <DeviceMockup>
                        <div className="p-4">
                            <Image src={GunnerMan} alt="Aeronaut" className="w-full h-[400px] object-cover rounded-xl mb-4" />
                            <h2 className="text-xl font-bold mb-2">Aeronaut</h2>
                            <div className="flex mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-cyan-400">★</span>
                                ))}
                            </div>
                            <div className="text-sm text-gray-400 mb-2">
                                <p>Type: Outfit</p>
                                <p>Release Date: Sep 17th, 2023</p>
                                <p>Availability: Rare</p>
                            </div>
                            <Button className="w-full bg-cyan-500 hover:bg-cyan-600">CHOOSE SKIN</Button>
                        </div>
                    </DeviceMockup>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h1 className="text-4xl font-bold mb-4">Main Idea</h1>
                        <p className="text-gray-400">
                            Our App is the ultimate broadcast promotion platform. Stream your best moments, create teams, find new friends, and use custom settings to get only vivid emotions from the gameplay. The application supports all mobile games and genres - shooters, moba, strategies and arcades!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Personalize Your Streams</h1>
                        <p className="text-gray-400">
                            Customize your stream with our new mobile themes. Make your stream unique by adding beautiful overlays in a few easy clicks.
                        </p>
                    </div>
                    <DeviceMockup>
                        <div className="p-4 ">
                            <h2 className="text-xl font-bold mb-4">Skins List</h2>
                            <div className="relative mb-4">
                                <SearchBar onSearch={handleSearch} placeholder="search skins..." />
                            </div>
                            <h3 className="text-lg font-semibold mb-5">Trending Skins</h3>

                            <div className='flex flex-col space-y-6 relative'>
                                {filteredSkins.map((skin, index) => (
                                    <SkinCard
                                        key={index}
                                        image={skin.image}
                                        index={index}
                                        name={skin.name}
                                        rating={skin.rating}
                                    />
                                ))}
                                {filteredSkins.length === 0 && (
                                    <p className="text-gray-400 text-center py-4">No skins found</p>
                                )}
                            </div>
                        </div>
                    </DeviceMockup>
                </div>
            </div>
        </div>
    )
}