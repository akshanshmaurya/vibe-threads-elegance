
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Classic Wool Coat",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
      category: "Women"
    },
    {
      id: 2,
      name: "Tailored Blazer",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      category: "Men"
    },
    {
      id: 3,
      name: "Silk Evening Dress",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      category: "Women"
    },
    {
      id: 4,
      name: "Casual Denim Jacket",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop",
      category: "Children"
    },
    {
      id: 5,
      name: "Premium Cotton Shirt",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      category: "Men"
    },
    {
      id: 6,
      name: "Elegant Midi Skirt",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&h=500&fit=crop",
      category: "Women"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
            New Arrivals
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium clothing, carefully curated for style and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-ivory rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-white/80 hover:bg-white text-navy"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <span className="text-xs text-gray-500 font-inter uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="font-playfair text-lg font-semibold text-navy mt-1 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gold hover:bg-gold/90 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
