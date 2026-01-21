import React from 'react';
import { HeaderLogo } from './components/HeaderLogo';
import { InfiniteScroll } from './components/InfiniteScroll';
import { ContactButtons } from './components/ContactButtons';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
      `}</style>
      {/* Mobile Container simulating iPhone view */}
      <div className="w-full max-w-[430px] bg-white dark:bg-gray-950 shadow-2xl min-h-screen relative flex flex-col items-center pb-10 transition-colors duration-300">
        
        {/* Header Section */}
        <div className="w-full pt-8 pb-4 flex justify-center relative">
          {/* Grey Background Pill */}
          <div className="bg-[#d9d9d9] dark:bg-gray-800 w-[90%] h-[160px] rounded-[25px] absolute top-4 z-0 transition-colors duration-300" />
          
          {/* Logo */}
          <div className="z-10 mt-6 scale-90 sm:scale-100 text-black dark:text-white">
            <HeaderLogo />
          </div>
        </div>

        {/* Spacing */}
        <div className="h-8" />

        {/* Projects / Infinite Scroll */}
        <InfiniteScroll />

        {/* Contact Section */}
        <ContactButtons />

        {/* Location Section */}
        <MapSection />

        {/* Footer */}
        <Footer />
        
      </div>
    </div>
  );
}
