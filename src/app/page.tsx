import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <div className="max-w-8xl mx-auto pb-20">
      <HeroSection />
      <TrustBadges />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}