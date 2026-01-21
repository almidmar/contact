import React from 'react';
import { Phone, Instagram, Mail, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Al Midmar Adv Design
TEL;TYPE=CELL:+971557412771
EMAIL:prajil@midmar.com
URL:https://www.instagram.com/al.midmar/
END:VCARD`;

const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382C17.119 14.382 16.535 14.382 14.908 13.565C14.631 13.425 14.437 13.55 14.288 13.785C14.075 14.12 13.593 14.869 13.434 15.053C13.276 15.237 13.116 15.253 12.85 15.119C12.584 14.985 11.378 14.588 10.301 13.628C9.489 12.905 8.941 12.012 8.782 11.728C8.622 11.444 8.765 11.296 8.898 11.163C9.018 11.043 9.165 10.85 9.298 10.666C9.431 10.482 9.475 10.349 9.564 10.165C9.653 9.981 9.608 9.814 9.534 9.664C9.46 9.514 8.868 8.056 8.618 7.464C8.383 6.91 8.136 6.972 7.954 6.972C7.79 6.972 7.6 6.972 7.409 6.972C7.218 6.972 6.909 7.043 6.649 7.327C6.39 7.611 5.654 8.3 5.654 9.704C5.654 11.108 6.676 12.464 6.821 12.665C6.967 12.866 8.847 15.762 11.726 17.005C12.411 17.3 12.943 17.477 13.359 17.61C14.035 17.825 14.654 17.794 15.145 17.721C15.69 17.639 16.824 17.034 17.059 16.366C17.295 15.698 17.295 15.129 17.225 15.012C17.155 14.895 16.977 14.828 16.711 14.695M12.049 21.956C10.279 21.956 8.636 21.499 7.199 20.702L6.857 20.5L3.109 21.482L4.11 17.83L3.886 17.473C3.018 16.092 2.56 14.516 2.56 12.879C2.56 7.649 6.816 3.393 12.049 3.393C14.584 3.393 16.967 4.381 18.759 6.174C20.552 7.967 21.539 10.35 21.539 12.885C21.538 18.114 17.281 21.956 12.049 21.956ZM12.049 1.5C5.775 1.5 0.667 6.608 0.667 12.882C0.667 14.89 1.189 16.845 2.193 18.59L0.5 24.776L6.829 23.117C8.455 24.004 10.239 24.47 12.049 24.47C18.323 24.47 23.431 19.362 23.431 13.088C23.431 6.814 18.323 1.5 12.049 1.5Z" />
    </svg>
  );
}

export function ContactButtons() {
  return (
    <div className="w-full mx-auto flex flex-col gap-4 py-6 transition-colors duration-300">
      <h2 className="text-center md:text-left text-xl font-bold mb-4 font-['Poppins',sans-serif] text-black dark:text-white transition-colors duration-300">Contact</h2>
      
      {/* Top Row: 3 Buttons */}
      <div className="flex gap-4 justify-between">
        {/* Call Button */}
        <a 
          href="tel:+971557412771"
          className="flex-1 aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Call"
        >
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Phone className="w-8 h-8 text-black dark:text-white" />
          </motion.div>
        </a>

        {/* Instagram Button */}
        <a 
          href="https://www.instagram.com/al.midmar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Instagram"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              background: ["transparent", "transparent"] // placeholder for more complex gradient if needed
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="rounded-xl overflow-hidden"
          >
            <Instagram className="w-8 h-8 text-black dark:text-white" />
          </motion.div>
        </a>

        {/* Mail Button */}
        <a 
          href="mailto:prajil@midmar.com"
          className="flex-1 aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors"
          aria-label="Mail"
        >
          <motion.div
            animate={{ 
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Mail className="w-8 h-8 text-black dark:text-white" />
          </motion.div>
        </a>
      </div>

      {/* Whatsapp Button */}
      <a 
        href="https://wa.me/971557412771"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md flex items-center px-6 gap-4 hover:bg-white dark:hover:bg-gray-700 transition-colors no-underline text-black dark:text-white"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <WhatsAppIcon className="w-8 h-8 text-green-600 fill-green-600" />
        </motion.div>
        <span className="text-lg font-semibold">WhatsApp</span>
      </a>

      {/* Add to Contact Button */}
      <a 
        href={vCardUrl}
        download="contact.vcf"
        className="w-full h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-md flex items-center px-6 gap-4 hover:bg-white dark:hover:bg-gray-700 transition-colors no-underline text-black dark:text-white"
      >
        <motion.div
          animate={{ x: [0, 3, 0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        >
          <UserPlus className="w-8 h-8 text-black dark:text-white" />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Add to Contact</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">+971 55 741 2771</span>
        </div>
      </a>
    </div>
  );
}
