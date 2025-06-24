
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-ivory min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/20 to-transparent"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
            Elevate Your Wardrobe with 
            <span className="block text-gold">Timeless Elegance</span>
          </h2>
          
          <p className="font-inter text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
            Discover premium fashion for every generation. From sophisticated menswear to elegant dresses and stylish children's clothing—crafted with attention to detail and timeless appeal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-white font-inter font-semibold px-8 py-4 text-lg transition-all hover:scale-105"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-navy text-navy hover:bg-navy hover:text-white font-inter font-semibold px-8 py-4 text-lg transition-all"
            >
              View Collections
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-600 font-inter">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>Premium Quality Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>Sustainable Fashion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>Inclusive Sizing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
