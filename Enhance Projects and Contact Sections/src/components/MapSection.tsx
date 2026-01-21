import React from 'react';

export function MapSection() {
  return (
    <div className="w-full mx-auto py-6 flex flex-col items-center md:items-start transition-colors duration-300">
      <h2 className="text-center md:text-left text-xl font-bold mb-4 font-['Poppins',sans-serif] text-black dark:text-white transition-colors duration-300">Location</h2>
      <div className="w-full h-[250px] md:h-[400px] bg-gray-200 dark:bg-gray-800 rounded-[20px] overflow-hidden shadow-md transition-colors duration-300">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.557539574303!2d55.43492537506985!3d25.292472627835693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f007b57c70b%3A0x47f0476467d53a6e!2sAL%20MIDMAR%20ADV.%20DESIGN!5e1!3m2!1sen!2sae!4v1769001454840!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Al Midmar Location"
        />
      </div>
    </div>
  );
}
