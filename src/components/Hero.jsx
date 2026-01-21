import React from 'react'
import ButtonPrimary from "./Button";


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 px-4 md:px-6 lg:px-12 relative overflow-hidden bg-black">
      <div className="max-w-screen-xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Content */}
          <div>
            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 leading-none"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", letterSpacing: '0.02em' }}
            >
              <span className="text-amber-100">WELCOME TO MY</span>
              <br />
              <span className="text-cyan-400">PORTFOLIO</span>
            </h1>


            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-50 mb-4 leading-relaxed">
              Hey, I'm <span className="text-orange-500 font-bold">Shubham</span>. I talk to computers for a living.
              Sometimes they listen. Sometimes they throw errors{' '}
              <span className="text-orange-500 font-bold">fun</span> &&{' '}
              <span className="text-pink-400 font-bold">approachable</span>.
            </p>


            {/* CTA Button */}
            <ButtonPrimary 
              href="#work"
              label="SEE MY PROJECTS"
              classes="inline-block bg-amber-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-amber-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.3)] mt-6 md:mt-8"
            />
          </div>


          {/* Right Visual - Responsive Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px]">
              {/* Retro Computer Image - Fully Responsive */}
              <img 
                src="/images/retro.png" 
                alt="Hero Illustration"
                className="float-animation w-full h-auto"
                style={{ 
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Hero