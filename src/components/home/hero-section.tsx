'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Leaf, Recycle, Award } from 'lucide-react';
import { useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-eco-50 via-white to-eco-100" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container-wide flex min-h-[90vh] items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="eco" className="px-3 py-1">
                <Leaf className="h-3 w-3 mr-1" />
                Carbon Neutral Certified
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                B Corp Certified
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Sustainable Packaging for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">
                Greener Future
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your business with eco-friendly packaging solutions. 
              Reduce environmental impact by up to 70% without compromising on quality or design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="eco" className="text-lg px-8" asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/quote">Get Custom Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center sm:text-left"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Recycle className="h-5 w-5 text-eco-600" />
                  <span className="text-3xl font-bold">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Recyclable Materials</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center sm:text-left"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="h-5 w-5 text-eco-600" />
                  <span className="text-3xl font-bold">70%</span>
                </div>
                <p className="text-sm text-muted-foreground">Less CO₂ Emissions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center sm:text-left"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-5 w-5 text-eco-600" />
                  <span className="text-3xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - 3D Product Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Floating Product Cards */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-48 h-48 bg-white rounded-2xl shadow-2xl p-4 z-10"
              >
                <img 
                  src="/api/placeholder/180/180" 
                  alt="Eco Box"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-2xl shadow-2xl p-4 z-20"
              >
                <img 
                  src="/api/placeholder/180/180" 
                  alt="Biodegradable Bag"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-56 h-56 bg-white rounded-2xl shadow-2xl p-4 z-15"
              >
                <img 
                  src="/api/placeholder/220/220" 
                  alt="Compostable Container"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-eco-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-eco-300 rounded-full blur-3xl opacity-40" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div 
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}