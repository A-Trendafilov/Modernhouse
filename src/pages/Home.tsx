import CardSection from '@/components/sections/CardSection'
import HeroSection from '@/components/sections/HeroSection'
import LazyLoad from '@/components/utils/LazyLoad'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LazyLoad>
        <CardSection />
      </LazyLoad>
    </div>
  )
}

export default Home
