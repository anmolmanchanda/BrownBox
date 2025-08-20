'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/product/product-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/types';

// Mock data - will be replaced with Shopify API
const mockProducts: Partial<Product>[] = [
  {
    id: '1',
    title: 'Eco-Friendly Food Container',
    shortDescription: 'Biodegradable takeout container made from sugarcane fiber',
    price: { amount: 0.45, currencyCode: 'USD' },
    images: [
      { 
        id: '1', 
        url: '/api/placeholder/400/500', 
        altText: 'Eco-Friendly Food Container',
        width: 400,
        height: 500,
        position: 1,
        type: 'primary'
      }
    ],
    sustainability: {
      carbonFootprint: { value: 0.2, unit: 'kg CO2e', comparisonToStandard: -65 },
      recyclability: { percentage: 100 },
      biodegradability: { percentage: 100, timeframe: '90 days' },
      waterUsage: { value: 2, unit: 'liters', reduction: 80 },
      energyUsage: { value: 0.5, unit: 'kWh', renewable: 100 },
      lifecycle: [],
      environmentalImpactScore: 95
    },
    tags: ['biodegradable', 'compostable', 'food-safe']
  },
  {
    id: '2',
    title: 'Recycled Paper Bags',
    shortDescription: '100% recycled kraft paper shopping bags with rope handles',
    price: { amount: 0.32, currencyCode: 'USD' },
    images: [
      { 
        id: '2', 
        url: '/api/placeholder/400/600', 
        altText: 'Recycled Paper Bags',
        width: 400,
        height: 600,
        position: 1,
        type: 'primary'
      }
    ],
    sustainability: {
      carbonFootprint: { value: 0.15, unit: 'kg CO2e', comparisonToStandard: -70 },
      recyclability: { percentage: 100 },
      biodegradability: { percentage: 100, timeframe: '30 days' },
      waterUsage: { value: 1.5, unit: 'liters', reduction: 75 },
      energyUsage: { value: 0.3, unit: 'kWh', renewable: 90 },
      lifecycle: [],
      environmentalImpactScore: 92
    },
    tags: ['recycled', 'reusable', 'customizable']
  },
  {
    id: '3',
    title: 'Compostable Mailer Bags',
    shortDescription: 'Shipping mailers that break down in home compost',
    price: { amount: 0.68, currencyCode: 'USD' },
    images: [
      { 
        id: '3', 
        url: '/api/placeholder/400/450', 
        altText: 'Compostable Mailer Bags',
        width: 400,
        height: 450,
        position: 1,
        type: 'primary'
      }
    ],
    sustainability: {
      carbonFootprint: { value: 0.25, unit: 'kg CO2e', comparisonToStandard: -60 },
      recyclability: { percentage: 0 },
      biodegradability: { percentage: 100, timeframe: '180 days' },
      waterUsage: { value: 3, unit: 'liters', reduction: 70 },
      energyUsage: { value: 0.6, unit: 'kWh', renewable: 85 },
      lifecycle: [],
      environmentalImpactScore: 88
    },
    tags: ['compostable', 'waterproof', 'tear-resistant']
  },
  {
    id: '4',
    title: 'Bamboo Fiber Cups',
    shortDescription: 'Reusable coffee cups made from bamboo fiber',
    price: { amount: 1.25, currencyCode: 'USD' },
    images: [
      { 
        id: '4', 
        url: '/api/placeholder/400/550', 
        altText: 'Bamboo Fiber Cups',
        width: 400,
        height: 550,
        position: 1,
        type: 'primary'
      }
    ],
    sustainability: {
      carbonFootprint: { value: 0.3, unit: 'kg CO2e', comparisonToStandard: -55 },
      recyclability: { percentage: 100 },
      biodegradability: { percentage: 100, timeframe: '2 years' },
      waterUsage: { value: 4, unit: 'liters', reduction: 60 },
      energyUsage: { value: 0.8, unit: 'kWh', renewable: 80 },
      lifecycle: [],
      environmentalImpactScore: 90
    },
    tags: ['reusable', 'dishwasher-safe', 'BPA-free']
  },
  {
    id: '5',
    title: 'Plant-Based Wrap Film',
    shortDescription: 'Cling wrap alternative made from plant cellulose',
    price: { amount: 0.12, currencyCode: 'USD' },
    images: [
      { 
        id: '5', 
        url: '/api/placeholder/400/400', 
        altText: 'Plant-Based Wrap Film',
        width: 400,
        height: 400,
        position: 1,
        type: 'primary'
      }
    ],
    sustainability: {
      carbonFootprint: { value: 0.1, unit: 'kg CO2e', comparisonToStandard: -75 },
      recyclability: { percentage: 0 },
      biodegradability: { percentage: 100, timeframe: '60 days' },
      waterUsage: { value: 1, unit: 'liters', reduction: 85 },
      energyUsage: { value: 0.2, unit: 'kWh', renewable: 95 },
      lifecycle: [],
      environmentalImpactScore: 93
    },
    tags: ['compostable', 'food-safe', 'transparent']
  },
  {
    id: '6',
    title: 'Seaweed Packaging Pods',
    shortDescription: 'Edible packaging pods made from seaweed extract',
    price: { amount: 0.35, currencyCode: 'USD' },
    images: [
      { 
        id: '6', 
        url: '/api/placeholder/400/480', 
        altText: 'Seaweed Packaging Pods',
        width: 400,
        height: 480,
        position: 1,
        type: 'primary'
      }
    ],
    sustainability: {
      carbonFootprint: { value: 0.05, unit: 'kg CO2e', comparisonToStandard: -90 },
      recyclability: { percentage: 0 },
      biodegradability: { percentage: 100, timeframe: '7 days' },
      waterUsage: { value: 0.5, unit: 'liters', reduction: 95 },
      energyUsage: { value: 0.1, unit: 'kWh', renewable: 100 },
      lifecycle: [],
      environmentalImpactScore: 98
    },
    tags: ['edible', 'zero-waste', 'innovative']
  }
];

export function ProductGallery() {
  const [filter, setFilter] = useState<'all' | 'biodegradable' | 'recyclable' | 'compostable'>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredProducts = mockProducts.filter(product => {
    if (filter === 'all') return true;
    return product.tags?.includes(filter);
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Discover Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">
              Eco-Friendly
            </span>{' '}
            Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our gallery of sustainable packaging products designed to minimize environmental impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-2 mb-12"
        >
          {['all', 'biodegradable', 'recyclable', 'compostable'].map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? 'eco' : 'outline'}
              onClick={() => setFilter(filterOption as typeof filter)}
              className="capitalize"
            >
              {filterOption}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div ref={containerRef} className="relative">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  className={`
                    ${index % 5 === 0 ? 'md:row-span-2' : ''}
                    ${index % 7 === 0 ? 'lg:col-span-2' : ''}
                  `}
                >
                  <ProductCard product={product as Product} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}