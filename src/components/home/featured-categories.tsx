'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Package, 
  ShoppingBag, 
  Truck, 
  Coffee,
  Utensils,
  Gift
} from 'lucide-react';

const categories = [
  {
    id: '1',
    name: 'Food Packaging',
    description: 'Containers, wraps, and boxes for food service',
    icon: Utensils,
    href: '/products/food-packaging',
    color: 'from-eco-400 to-eco-600',
    image: '/api/placeholder/400/300'
  },
  {
    id: '2',
    name: 'Retail Bags',
    description: 'Shopping bags and carriers for retail',
    icon: ShoppingBag,
    href: '/products/retail-bags',
    color: 'from-earth-400 to-earth-600',
    image: '/api/placeholder/400/300'
  },
  {
    id: '3',
    name: 'Shipping Materials',
    description: 'Mailers, boxes, and protective packaging',
    icon: Truck,
    href: '/products/shipping',
    color: 'from-blue-400 to-blue-600',
    image: '/api/placeholder/400/300'
  },
  {
    id: '4',
    name: 'Beverage Cups',
    description: 'Cups, lids, and straws for beverages',
    icon: Coffee,
    href: '/products/beverage',
    color: 'from-amber-400 to-amber-600',
    image: '/api/placeholder/400/300'
  },
  {
    id: '5',
    name: 'Custom Packaging',
    description: 'Tailored solutions for your brand',
    icon: Package,
    href: '/products/custom',
    color: 'from-purple-400 to-purple-600',
    image: '/api/placeholder/400/300'
  },
  {
    id: '6',
    name: 'Gift Packaging',
    description: 'Eco-friendly gift boxes and wrapping',
    icon: Gift,
    href: '/products/gift',
    color: 'from-pink-400 to-pink-600',
    image: '/api/placeholder/400/300'
  }
];

export function FeaturedCategories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20">
      <div className="container-wide">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect sustainable packaging solution for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={category.href}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <motion.div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-3`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {category.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-eco-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}