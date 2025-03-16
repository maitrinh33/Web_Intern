import HeroSection from '@/components/Hero'
import ImageSection from "@/components/ImageSection";
import NewsSection from '@/components/News';

const HomePage = () => {
  return (
    <main className='my-16'>
      <HeroSection/>
      <ImageSection />
      <NewsSection/>
    </main>  
  )
}

export default HomePage

