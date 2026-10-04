import React from 'react';
import { ShoppingCart, Search, Heart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-spiritualCream border-b border-spiritualGold/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-spiritualMaroon tracking-wide">
              Puja Needs <span className="text-spiritualGold">&</span> Fragrances
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-spiritualMaroon/60 -mt-1 block sm:hidden">
              Divine Aromas
            </p>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 font-medium text-spiritualMaroon">
            <a href="#" className="hover:text-spiritualGold transition-colors duration-200">Udbatti</a>
            <a href="#" className="hover:text-spiritualGold transition-colors duration-200">Agarbatti</a>
            <a href="#" className="hover:text-spiritualGold transition-colors duration-200">Dhup</a>
            <a href="#" className="hover:text-spiritualGold transition-colors duration-200">Attar</a>
            <a href="#" className="text-spiritualGold font-semibold hover:opacity-80 transition-opacity">Festive Combos 🔥</a>
          </nav>

          {/* Utility Icons & Search */}
          <div className="flex items-center space-x-4">
            
            {/* Search Bar - Hidden on small mobile screens */}
            <div className="hidden sm:flex items-center relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-white border border-spiritualGold/30 text-spiritualMaroon placeholder-gray-400 text-sm rounded-full pl-4 pr-10 py-1.5 focus:outline-none focus:border-spiritualMaroon w-48 lg:w-64 transition-all"
              />
              <Search className="absolute right-3 w-4 h-4 text-spiritualMaroon/60 cursor-pointer" />
            </div>

            {/* Icons button group */}
            <button className="p-1.5 text-spiritualMaroon hover:text-spiritualGold transition-colors relative sm:hidden">
              <Search className="w-6 h-6" />
            </button>

            <button className="p-1.5 text-spiritualMaroon hover:text-spiritualGold transition-colors relative">
              <Heart className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>

            <button className="p-1.5 text-spiritualMaroon hover:text-spiritualGold transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-spiritualMaroon text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>

            <button className="p-1.5 text-spiritualMaroon hover:text-spiritualGold transition-colors hidden sm:block">
              <User className="w-6 h-6" />
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Bottom Scrollable Bar */}
      <div className="md:hidden bg-spiritualMaroon text-white flex justify-around py-2.5 text-sm overflow-x-auto whitespace-nowrap px-4">
        <a href="#" className="px-3 py-0.5 active:text-spiritualGold">Udbatti</a>
        <a href="#" className="px-3 py-0.5 active:text-spiritualGold">Agarbatti</a>
        <a href="#" className="px-3 py-0.5 active:text-spiritualGold">Dhup</a>
        <a href="#" className="px-3 py-0.5 active:text-spiritualGold">Attar</a>
        <a href="#" className="px-3 py-0.5 text-spiritualGold font-semibold">Combos</a>
      </div>
    </header>
  );
};

export default Header;
