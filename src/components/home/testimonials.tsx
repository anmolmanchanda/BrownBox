'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Sustainability Director',
    company: 'GreenCafe Co.',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Switching to EcoPack Solutions reduced our carbon footprint by 65% while actually saving us money. Their compostable containers are perfect for our zero-waste initiative.',
    tags: ['Food Service', 'Compostable']
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Operations Manager',
    company: 'Urban Retail Group',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'The quality and durability of their recycled paper bags exceeded our expectations. Our customers love that we\'re using sustainable packaging.',
    tags: ['Retail', 'Recyclable']
  },
  {
    id: '3',
    name: 'Emma Watson',
    role: 'E-commerce Director',
    company: 'Natural Beauty Box',
    image: '/api/placeholder/80/80',
    rating: 5,
    text: 'Their compostable mailers are game-changing. We\'ve eliminated plastic from our shipping process completely, and customer satisfaction has increased.',
    tags: ['E-commerce', 'Shipping']
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container-wide">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">
              Forward-Thinking
            </span>{' '}
            Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how companies are transforming their packaging while protecting the planet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-xl transition-shadow duration-300 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-eco-200" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}