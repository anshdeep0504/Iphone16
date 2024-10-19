import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section className="common-padding bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-5">
        <div id="chip" className="flex justify-center w-full my-20 negative-margin">
          <img src={chipImg} alt="A18 Pro chip" width={380} height={380} />
        </div>

        <style>
          {`
            .negative-margin {
              margin-top: -100px;
            }
          `}
        </style>

        <div className="flex flex-col items-center text-center">
          <h2 className="hiw-title text-4xl md:text-5xl font-bold mb-2">
            A18 Pro chip.<br /> The Ultimate Gaming Experience.
          </h2>
          <p className="hiw-subtitle text-lg md:text-xl">
            Discover the groundbreaking redesign in Apple’s GPU technology.
          </p>
        </div>

        <div className="mt-10 mb-14">
          <div className="relative h-full flex justify-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="Gaming Frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-400 font-semibold text-center mt-3">The Weeknd: Shot on iPhone 16 Pro</p>
        </div>

        <div className="hiw-text-container flex flex-col md:flex-row justify-center items-center">
          <div className="flex-1 flex flex-col items-center g_fadeIn mb-4 md:mb-0">
            <p className="hiw-text text-lg md:text-xl">
              The A18 Pro is a revolutionary iPhone chip that delivers our <span className="text-yellow-400 font-bold">best graphic performance</span>.
            </p>
            <p className="hiw-text text-lg md:text-xl">
              Mobile <span className="text-yellow-400 font-bold">games will immerse you</span> in incredibly detailed worlds.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center g_fadeIn">
            <p className="hiw-text text-lg md:text-xl">Introducing</p>
            <p className="hiw-bigtext text-3xl font-bold">Pro-Class GPU</p>
            <p className="hiw-text text-lg md:text-xl">with 6 powerful cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
