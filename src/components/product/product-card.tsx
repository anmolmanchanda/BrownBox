'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Eye, 
  Leaf, 
  Recycle, 
  Droplets,
  Zap,
  TrendingDown,
  Info
} from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

  const sustainabilityScore = product.sustainability?.environmentalImpactScore || 0;
  const co2Reduction = Math.abs(product.sustainability?.carbonFootprint?.comparisonToStandard || 0);

  return (
    <Card 
      className="relative h-full overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowMetrics(false);
      }}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-eco-50 to-eco-100">
        <motion.div
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 2 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={product.images[0]?.url || '/api/placeholder/400/500'}
            alt={product.images[0]?.altText || product.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sustainability Score Badge */}
        <div className="absolute top-4 left-4 z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Badge variant="eco" className="backdrop-blur-sm bg-white/90">
              <Leaf className="h-3 w-3 mr-1" />
              {sustainabilityScore}% Eco Score
            </Badge>
          </motion.div>
        </div>

        {/* Quick Action Buttons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 right-4 z-10 flex gap-2"
            >
              <Button 
                size="sm" 
                variant="eco"
                className="flex-1 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to cart logic
                }}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </Button>
              <Button 
                size="sm" 
                variant="secondary"
                className="backdrop-blur-sm"
                asChild
              >
                <Link href={`/products/${product.slug || product.id}`}>
                  <Eye className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMetrics(!showMetrics);
                }}
              >
                <Info className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sustainability Metrics Overlay */}
        <AnimatePresence>
          {showMetrics && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 p-6 flex flex-col justify-center"
            >
              <h4 className="font-semibold mb-4 text-center">Sustainability Metrics</h4>
              
              <div className="space-y-3">
                {/* CO2 Savings */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-eco-600" />
                    <span className="text-sm">CO₂ Reduction</span>
                  </div>
                  <span className="text-sm font-semibold text-eco-600">
                    {co2Reduction}%
                  </span>
                </div>

                {/* Recyclability */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Recycle className="h-4 w-4 text-eco-600" />
                    <span className="text-sm">Recyclability</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {product.sustainability?.recyclability?.percentage || 0}%
                  </span>
                </div>

                {/* Biodegradability */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-eco-600" />
                    <span className="text-sm">Biodegradable</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {product.sustainability?.biodegradability?.percentage || 0}%
                  </span>
                </div>

                {/* Water Usage */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-eco-600" />
                    <span className="text-sm">Water Saved</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {product.sustainability?.waterUsage?.reduction || 0}%
                  </span>
                </div>

                {/* Renewable Energy */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-eco-600" />
                    <span className="text-sm">Renewable Energy</span>
                  </div>
                  <span className="text-sm font-semibold">
                    {product.sustainability?.energyUsage?.renewable || 0}%
                  </span>
                </div>
              </div>

              {/* Biodegradability Timeline */}
              {product.sustainability?.biodegradability?.timeframe && (
                <div className="mt-4 pt-4 border-t text-center">
                  <p className="text-xs text-muted-foreground">
                    Biodegrades in{' '}
                    <span className="font-semibold text-eco-600">
                      {product.sustainability.biodegradability.timeframe}
                    </span>
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price and Tags */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold">
            {formatCurrency(product.price.amount, product.price.currencyCode)}
          </span>
          <span className="text-xs text-muted-foreground">per unit</span>
        </div>

        {/* Product Tags */}
        <div className="flex flex-wrap gap-1">
          {product.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Hover Effect Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-eco-500/10 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </Card>
  );
}