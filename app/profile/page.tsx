
import LandingPage from '@/components/shared/landing'
import SkinSelectorSection from '@/components/shared/skin-select'

export default function ProfilePage() {
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