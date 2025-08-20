'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Calculator } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-eco-500 via-eco-600 to-eco-700" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')]" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="container-wide relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Make the Switch to{' '}
            <span className="text-yellow-300">Sustainable Packaging?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
          >
            Join thousands of businesses reducing their environmental impact. 
            Get a custom quote tailored to your needs in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 bg-white text-eco-700 hover:bg-white/90"
              asChild
            >
              <Link href="/quote">
                <Calculator className="mr-2 h-5 w-5" />
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to an Expert
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full" />
              <span>Free Samples Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full" />
              <span>No Minimum Orders</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-300 rounded-full" />
              <span>Custom Branding Options</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}