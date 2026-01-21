import React from 'react';
import { HeaderLogo } from './components/HeaderLogo';
import { InfiniteScroll } from './components/InfiniteScroll';
import { ContactButtons } from './components/ContactButtons';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        body { font-family: 'Poppins', sans-serif; }
      `}</style>
      
      {/* Main Web Container */}
      <div className="w-full min-h-screen flex flex-col items-center pb-10 transition-colors duration-300">
        
        {/* Header Section */}
        <div className="w-full pt-8 pb-12 flex justify-center relative">
          {/* Grey Background Pill - Responsive Width */}
          <div className="bg-[#d9d9d9] dark:bg-gray-800 w-[90%] max-w-4xl h-[160px] rounded-[25px] absolute top-4 z-0 transition-colors duration-300" />
          
          {/* Logo */}
          <div className="z-10 mt-6 scale-90 sm:scale-100 md:scale-110 text-black dark:text-white">
            <HeaderLogo />
          </div>
        </div>

        {/* Spacing */}
        <div className="h-8" />

        {/* Projects / Infinite Scroll - Full Width */}
        <div className="w-full">
           <InfiniteScroll />
        </div>

        {/* Content Wrapper for standard web width */}
        <div className="w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:gap-8">
            
            {/* Left Column: Contact */}
            <div className="w-full md:w-1/2">
                <ContactButtons />
            </div>

            {/* Right Column: Map */}
            <div className="w-full md:w-1/2">
                <MapSection />
            </div>
        </div>

        {/* Footer */}
        <Footer />
        
      </div>
    </div>
  );
}
