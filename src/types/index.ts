// Product Types
export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: ProductCategory;
  images: ProductImage[];
  price: Money;
  bulkPricing: BulkPricingTier[];
  sku: string;
  inventory: {
    available: number;
    reserved: number;
    incoming?: number;
    incomingDate?: Date;
  };
  dimensions: ProductDimensions;
  weight: number; // in grams
  materials: Material[];
  sustainability: SustainabilityMetrics;
  certifications: Certification[];
  customizationOptions?: CustomizationOption[];
  leadTime: number; // in days
  minimumOrderQuantity: number;
  tags: string[];
  seo: SEOMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  status: 'draft' | 'published' | 'archived';
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
  image?: string;
  displayOrder: number;
}

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  width: number;
  height: number;
  position: number;
  type: 'primary' | 'gallery' | '360' | 'sustainability' | 'technical';
}

export interface Money {
  amount: number;
  currencyCode: string;
}

export interface BulkPricingTier {
  minQuantity: number;
  maxQuantity?: number;
  price: Money;
  discount: number; // percentage
}

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
  unit: 'mm' | 'cm' | 'm' | 'in' | 'ft';
}

export interface Material {
  id: string;
  name: string;
  percentage: number;
  recyclable: boolean;
  biodegradable: boolean;
  compostable: boolean;
  source: 'recycled' | 'virgin' | 'renewable' | 'mixed';
  description?: string;
}

// Sustainability Types
export interface SustainabilityMetrics {
  carbonFootprint: {
    value: number;
    unit: 'kg CO2e' | 'g CO2e';
    comparisonToStandard: number; // percentage difference
  };
  recyclability: {
    percentage: number;
    instructions?: string;
  };
  biodegradability: {
    percentage: number;
    timeframe?: string; // e.g., "90 days"
    conditions?: string;
  };
  waterUsage: {
    value: number;
    unit: 'liters' | 'gallons';
    reduction?: number; // percentage vs standard
  };
  energyUsage: {
    value: number;
    unit: 'kWh' | 'MJ';
    renewable: number; // percentage from renewable sources
  };
  lifecycle: LifecycleStage[];
  environmentalImpactScore: number; // 0-100
}

export interface LifecycleStage {
  stage: 'production' | 'transportation' | 'use' | 'disposal';
  impact: number;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  badgeUrl?: string;
  verificationUrl?: string;
  validUntil?: Date;
  type: 'environmental' | 'quality' | 'safety' | 'social';
}

export interface CustomizationOption {
  id: string;
  type: 'printing' | 'size' | 'color' | 'material' | 'feature';
  name: string;
  values: CustomizationValue[];
  required: boolean;
  priceModifier?: Money;
}

export interface CustomizationValue {
  id: string;
  value: string;
  label: string;
  priceModifier?: Money;
  available: boolean;
}

// Cart & Order Types
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  customizations?: Record<string, string>;
  price: Money;
  discountedPrice?: Money;
  addedAt: Date;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: Money;
  discount?: {
    code: string;
    amount: Money;
    type: 'percentage' | 'fixed';
  };
  shipping?: ShippingOption;
  tax?: Money;
  total: Money;
  sustainabilityImpact: {
    totalCO2Saved: number;
    totalRecyclableWeight: number;
  };
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
}

export interface ShippingOption {
  id: string;
  name: string;
  carrier: string;
  estimatedDays: number;
  price: Money;
  carbonNeutral: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  shipping: ShippingOption;
  payment: PaymentInfo;
  subtotal: Money;
  discount?: Money;
  tax: Money;
  total: Money;
  status: OrderStatus;
  notes?: string;
  sustainabilityReport?: SustainabilityReport;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem extends CartItem {
  fulfillmentStatus: 'pending' | 'processing' | 'shipped' | 'delivered';
  trackingNumber?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

// Customer Types
export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
  whatsapp?: string;
  type: 'individual' | 'business';
  taxId?: string;
  addresses: Address[];
  preferredPaymentMethod?: string;
  sustainabilityPreferences?: {
    prioritizeEcoFriendly: boolean;
    carbonNeutralShipping: boolean;
    minRecyclability?: number;
  };
  createdAt: Date;
  lastOrderAt?: Date;
  totalSpent: Money;
  orderCount: number;
}

export interface Address {
  id: string;
  type: 'shipping' | 'billing';
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
}

// Payment Types
export interface PaymentInfo {
  method: 'card' | 'bank_transfer' | 'razorpay' | 'stripe';
  status: 'pending' | 'processing' | 'completed' | 'failed';
  transactionId?: string;
  amount: Money;
  paidAt?: Date;
}

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: Record<string, any>;
}

// Analytics Types
export interface ProductAnalytics {
  productId: string;
  views: number;
  addToCartRate: number;
  conversionRate: number;
  averageTimeOnPage: number;
  bounceRate: number;
  topReferrers: string[];
  searchQueries: string[];
}

export interface SustainabilityReport {
  orderId: string;
  totalCO2Saved: number;
  totalRecyclableWeight: number;
  totalBiodegradableWeight: number;
  comparisonToStandard: {
    co2Reduction: number;
    wasteReduction: number;
  };
  certificateUrl?: string;
  tips: string[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    hasMore?: boolean;
  };
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

export interface FilterParams {
  category?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  materials?: string[];
  certifications?: string[];
  minRecyclability?: number;
  inStock?: boolean;
  tags?: string[];
}