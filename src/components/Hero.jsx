import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => window.removeEventListener('resize', handleVideoSrcSet);
  }, []);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      '#heroTitle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 1 }
    );

    // CTA animations (Buy button and text)
    gsap.fromTo(
      '#cta',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', delay: 2 }
    );
  }, []);

  return (
    <section className="w-full h-screen bg-black relative flex items-center justify-center">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="w-full flex justify-center">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            loop
            key={videoSrc}
            style={{ width: '80%', height: 'auto' }} 
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute top-10 text-center w-full">
        <h1
          id="heroTitle"
          className="creative-title text-5xl md:text-6xl font-bold"
          style={{
            marginLeft: '12px',  // Left margin added
            letterSpacing: '4px',
            color: '#ffffff', // Golden color
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
            fontWeight: 600,
          }}
        >
          iPhone 16 <span className="text-sm block text-gray-400">– Reinvented</span>
        </h1>
      </div>

      <div
        id="cta"
        className="absolute bottom-16 w-full flex flex-col items-center"
      >
        <a 
          href="#highlights" 
          className="btn text-white bg-gray-700 px-6 py-3 rounded-md hover:bg-gray-600 transition-transform transform hover:scale-105 duration-300"
        >
          Buy Now
        </a>
        <p className="font-normal text-lg text-gray-400 mt-2">
          From $199/month or $999
        </p>
      </div>

      <style jsx>{`
        .btn {
          animation: fadeInUp 2s ease-out 1s forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .poppins {
          font-family: 'Poppins', sans-serif;
        }

        .creative-title {
          font-family: 'Bungee', sans-serif; /* Use Bungee as creative font */
          letter-spacing: 5px;
          text-transform: uppercase;
          background: linear-gradient(45deg, #ff007f, #ff8c00, #00d3ff, #fffa00);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradientAnimation 5s ease infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Additional text-shadow for a neon effect */
        .creative-title {
          text-shadow: 2px 2px 15px rgba(255, 105, 180, 0.9), 4px 4px 20px rgba(255, 165, 0, 0.9);
        }
      `}</style>
    </section>
  );
};

export default Hero;
