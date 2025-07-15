import React from 'react';

const glassSection =
  'bg-white/10 border border-white/25 shadow-2xl backdrop-blur-xl rounded-3xl p-8 relative';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className={glassSection + " w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12"}>
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="heading text-6xl md:text-7xl mt-8 mb-2 text-gray-100">SHAHIL MERCHANT</h1>
          <div className="font-dots text-xl md:text-2xl text-gray-400 tracking-widest mb-4">
          </div>
          <div className="font-dots text-2xl md:text-3xl text-gray-200 mb-8 tracking-wider">
            full-stack developer &amp; Electrical engineer.
          </div>
          <div className="font-dots text-lg md:text-xl text-gray-400 max-w-xl text-center">
            just finished up my degree in Electrical and Computer Engineering at THE™ Ohio State University.<br/>
            Minored in Entrepreneurship and Innovation.<br/>
          </div>
        </div>
        
        {/* Headshot */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center">
            {/* Liquid glass blob behind image */}
            <div
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                zIndex: 0,
                left: 0,
                top: 0,
                filter: 'blur(24px)',
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: '90%',
                  height: '90%',
                  background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.25) 0%, rgba(180,200,255,0.10) 60%, rgba(255,255,255,0.05) 100%)',
                  opacity: 0.85,
                }}
              />
            </div>
            {/* Headshot image with glass border and shine */}
            <div className="relative z-10">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHhmtEMkhNraw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689723311931?e=2147483647&v=beta&t=opNEiDTjQDRE69mVp4cCfrS5x2yqLtHNJvohGAZ8IEE"
                alt="Shahil Merchant"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-4 border-white/30 shadow-2xl backdrop-blur-xl"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 0 0 8px rgba(255,255,255,0.08) inset',
                  filter: 'contrast(1.08) brightness(1.05) grayscale(0.08) saturate(1.1)',
                }}
              />
              {/* Shine overlay */}
              <div
                className="absolute left-0 top-0 w-full h-full rounded-2xl pointer-events-none"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.10) 100%)',
                  mixBlendMode: 'screen',
                  opacity: 0.7,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 