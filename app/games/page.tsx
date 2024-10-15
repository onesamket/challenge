
import LandingPage from '@/components/sections/landing'
import SkinSelectorSection from '@/components/sections/skin-select'

export default function GamePage() {
    return (
        <div className="space-y-8">
            <SkinSelectorSection />
            <div className='space-y-8'>
                <LandingPage />
                <LandingPage />
            </div>
        </div>
    )
}