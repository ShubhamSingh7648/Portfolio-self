import React from 'react'
import ButtonPrimary from "./Button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 lg:px-12 relative overflow-hidden bg-black">
      <div className="max-w-screen-xl mx-auto w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Main Headline */}
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-none"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", letterSpacing: '0.02em' }}
            >
              <span className="text-amber-100">WELCOME TO MY</span>
              <br />
              <span className="text-cyan-400">PORTFOLIO</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl font-bold text-zinc-50 mb-4 leading-relaxed">
              Hey, I’m <span className="text-orange-500 font-bold">Shubham</span>. I talk to computers for a living.
Sometimes they listen. Sometimes they throw errors{' '}
              <span className="text-orange-500 font-bold">fun</span> &&{' '}
              <span className="text-pink-400 font-bold">approachable</span>.
            </p>

            {/* CTA Button */}
            <ButtonPrimary 
              href="#work"
              label="SEE MY PROJECTS"
              classes="inline-block bg-amber-400 text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-amber-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(251,191,36,0.3)] mt-8"
            />
          </div>

          {/* Right Visual - CUSTOM IMAGE with floating animation */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* CUSTOM FLOATING IMAGE - Fixed 400x400px size */}
              <img 
                src="/images/retro.png" 
                alt="Hero Illustration"
                className="float-animation"
                style={{ 
                  width: '400px', 
                  height: '400px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
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