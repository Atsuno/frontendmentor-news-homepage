import type { Metadata } from 'next'
import HeroSection from '@/app/components/hero/HeroSection'
import TopList from '@/app/components/hero/TopList'

export const metadata: Metadata = {
  title: 'Frontend Mentor | News homepage',
  description: 'Challenge News homepage',
}

const PageHome = () => (
  <main className="flex min-h-screen flex-col items-center gap-10 lg:max-w-8xl">
    <HeroSection />
    <TopList />
  </main>
)

export default PageHome
