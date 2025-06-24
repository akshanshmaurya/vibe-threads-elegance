
import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cart = () => {
  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Men's Tailored Wool Blazer",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      size: "L",
      color: "Navy",
      quantity: 1
    },
    {
      id: 2,
      name: "Women's Silk Midi Dress",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
      size: "M",
      color: "Ivory",
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Link to="/" className="flex items-center text-navy hover:text-gold transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-navy">Shopping Cart</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 border border-gray-200 rounded-lg mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-inter font-semibold text-navy">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Size: {item.size} | Color: {item.color}</p>
                    <p className="font-semibold text-gold">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-ivory p-6 rounded-lg h-fit"
            >
              <h2 className="font-playfair text-xl font-bold text-navy mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-gold">${total.toFixed(2)}</span>
                </div>
              </div>
              <Link to="/checkout">
                <Button className="w-full mt-6 bg-gold hover:bg-gold/90 text-white font-semibold py-3">
                  Proceed to Checkout
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
