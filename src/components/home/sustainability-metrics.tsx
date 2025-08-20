'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Leaf, 
  Recycle, 
  Droplets, 
  TrendingDown,
  Trees,
  Wind
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const metrics = [
  {
    icon: TrendingDown,
    value: '2.5M',
    unit: 'tons CO₂',
    label: 'Carbon Emissions Prevented',
    color: 'text-eco-600',
    bgColor: 'bg-eco-50'
  },
  {
    icon: Trees,
    value: '500K',
    unit: 'trees',
    label: 'Equivalent Trees Planted',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Droplets,
    value: '10M',
    unit: 'gallons',
    label: 'Water Conserved',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Recycle,
    value: '95%',
    unit: 'average',
    label: 'Recyclability Rate',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Leaf,
    value: '100%',
    unit: 'renewable',
    label: 'Energy from Renewables',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Wind,
    value: '30%',
    unit: 'lighter',
    label: 'Than Traditional Packaging',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50'
  }
];

export function SustainabilityMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-eco-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eco-400 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-wide relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Environmental{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-500 to-eco-700">
              Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together with our partners, we're making a measurable difference in reducing environmental footprint
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mb-4`}
                    >
                      <Icon className={`h-8 w-8 ${metric.color}`} />
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="mb-2"
                    >
                      <span className={`text-4xl font-bold ${metric.color}`}>
                        {metric.value}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {metric.unit}
                      </span>
                    </motion.div>
                    
                    <p className="text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join us in creating a sustainable future for packaging
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-eco-500 to-eco-600 text-white rounded-lg font-semibold hover:from-eco-600 hover:to-eco-700 transition-all duration-300"
            >
              Learn More About Our Impact
              <Leaf className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}