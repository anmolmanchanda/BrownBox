import { HeroSection } from '@/components/home/hero-section';
import { ProductGallery } from '@/components/home/product-gallery';
import { SustainabilityMetrics } from '@/components/home/sustainability-metrics';
import { FeaturedCategories } from '@/components/home/featured-categories';
import { Testimonials } from '@/components/home/testimonials';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <ProductGallery />
      <SustainabilityMetrics />
      <Testimonials />
      <CTASection />
    </>
  );
}