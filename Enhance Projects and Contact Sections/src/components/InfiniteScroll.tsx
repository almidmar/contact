import React from 'react';

const brands = [
  { name: 'Oracle', src: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Bel', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Bel_%28Unternehmen%29_logo.svg' },
  { name: 'Aster', src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Aster_DM_Healthcare_Logo.svg' },
  { name: 'PitStop UAE', src: 'https://i.ibb.co/jZ1Br2qt/Asset-1.png' },
  { name: 'Dollar Car Rental', src: 'https://i.ibb.co/4ntxR2JY/Asset-1.png' },
  { name: 'Arcera', src: 'https://cdn.thepharmaletter.com/convert/files/2025/06/234ca320-4a8b-11f0-8488-d9c201992a15-arcera.png/r%5Bwidth%5D=320/234ca320-4a8b-11f0-8488-d9c201992a15-arcera.webp' },
  { name: 'Filli Cafe', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Filli-cafe-logo.svg' },
  { name: 'ONE Ocean', src: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Ocean_Network_Express_logo.svg' },
];

export function InfiniteScroll() {
  return (
    <>
      <style>{`
        /* --- INFINITE SCROLL SECTION --- */
        .projects-section {
            width: 100%;
            margin-bottom: 50px;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            padding: 30px 0;
            background: transparent;
            transition: border-color 0.3s ease;
        }

        @media (prefers-color-scheme: dark) {
          .projects-section {
            border-top: 1px solid #333;
            border-bottom: 1px solid #333;
          }
          
          .section-title {
            color: #ccc !important;
          }
          
          /* In dark mode, invert black logos to make them white */
          .brand-item img {
            filter: grayscale(100%) brightness(0) invert(1) opacity(0.7);
          }
          
          .brand-item:hover img {
            /* On hover, show original colors but keep text readable? 
               Most logos here are corporate. If we revert filter, black text becomes invisible on dark bg.
               So we might need to keep them white-ish or trust that they have light colors. 
               Let's try a safe bet: keep them white on hover but increase opacity. 
               Or, since user asked for "Visual pleasing", white logos on dark is standard.
            */
            filter: grayscale(0%) brightness(0) invert(1) opacity(1);
          }
          
          /* Exception: if the logo is already suitable for dark mode (light colored), 
             inverting it might make it dark. But we don't know which is which easily without per-logo logic.
             The provided logos:
             Oracle (Red), Bel (Red/Green), Aster (Blue/Green), Filli (Orange).
             If we invert Red, it becomes Cyan. That's bad. 
             So 'brightness(0) invert(1)' forces everything to White. This is safe.
             But then we lose the "color on hover" effect for colored logos.
             
             Alternative: Light background for logos even in dark mode? 
             User asked for transparent background.
             
             Let's try: In dark mode, default state is White (inverted brightness 0).
             Hover state: Remove filter? If I remove filter, black text disappears.
             
             Let's stick to White logos in dark mode for consistency. It looks elegant.
          */
           .brand-item:hover img {
             opacity: 1;
             filter: grayscale(100%) brightness(0) invert(1);
           }
        }

        .section-title {
            text-align: center;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #666;
            margin-bottom: 25px;
            font-weight: 700;
            transition: color 0.3s ease;
        }

        .scroll-container {
            display: flex;
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .scroll-track {
            display: flex;
            gap: 40px;
            animation: scroll-left-to-right 30s linear infinite;
            padding-left: 40px; 
            width: max-content;
        }

        .brand-item {
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            padding: 0 10px;
            height: 80px; 
            min-width: 150px;
        }

        .brand-item img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: 60px;
            object-fit: contain;
            filter: grayscale(100%);
            opacity: 0.7;
            transition: filter 0.3s ease, opacity 0.3s ease;
        }

        .brand-item:hover img {
            filter: grayscale(0%);
            opacity: 1;
        }

        @keyframes scroll-left-to-right {
            0% {
                transform: translateX(-50%);
            }
            100% {
                transform: translateX(0);
            }
        }
      `}</style>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="scroll-container">
          <div className="scroll-track">
            {/* Duplicate the list to create seamless infinite scroll */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.src} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
