import React from 'react'
import ButtonPrimary from "./Button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center relative z-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-400/10 border-2 border-emerald-400 rounded-full mb-8 pulse-badge">
          <span className="text-2xl">⚡</span>
          <span className="text-emerald-400 font-bold text-sm uppercase tracking-wide">
            Available for work
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tight">
          Hi, Welcome<br />
          <span className="gradient-text">DEVELOPERS</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Building scalable modern websites that are{' '}
          <span className="text-emerald-400 font-bold">fun</span> &&{' '}
          <span className="text-cyan-400 font-bold">approachable</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 justify-center mb-16">
          <ButtonPrimary 
            href="#work"
            label="VIEW MY WORK"
            classes="bg-emerald-400 text-zinc-950 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-transparent hover:text-emerald-400 border-2 border-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(52,211,153,0.3)]"
          />
          <ButtonPrimary 
            href="#contact"
            label="GET IN TOUCH"
            classes="bg-transparent text-zinc-50 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider border-2 border-zinc-50 hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-300 hover:-translate-y-1"
          />
        </div>

        {/* Visual Elements */}
        <div className="flex items-center justify-center gap-8 flex-wrap mt-16">
          {/* Code Can */}
          <div className="w-40 h-52 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-3xl flex items-center justify-center text-5xl font-black text-zinc-950 float-animation shadow-2xl">
            CODE
          </div>

          {/* Tech Stack Snacks */}
          <div className="flex flex-col gap-3">
            <div className="px-8 py-4 bg-zinc-900 border-4 border-pink-500 rounded-xl font-black text-pink-500 text-lg transform rotate-2 hover:rotate-0 transition-transform">
              TypeScript
            </div>
            <div className="px-8 py-4 bg-zinc-900 border-4 border-cyan-400 rounded-xl font-black text-cyan-400 text-lg transform -rotate-2 hover:rotate-0 transition-transform">
              React
            </div>
            <div className="px-8 py-4 bg-zinc-900 border-4 border-amber-400 rounded-xl font-black text-amber-400 text-lg transform rotate-1 hover:rotate-0 transition-transform">
              Node.js
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Hero
