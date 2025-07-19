import React from 'react'
// Fix the import based on how Button.js exports components
import ButtonPrimary from "./Button"; // If it's default exported
// OR
// import { ButtonPrimary } from "./Button"; // If it's named exported

const Hero = () => {
  // Define headline-1 style inline to avoid CSS file
  const headlineStyle = {
    background: '-webkit-linear-gradient(0deg, #fafafa, #a1a1aa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <section id='home' className="pt-26 lg:pt-16">
        <div className='container px-4 mx-auto lg:px-8 xl:max-w-6xl lg:grid lg:grid-cols-2 items-center lg:gap-10'>
            <div>
                <div className='flex items-center gap-3 h-9 rounded-lg'>
                    <figure className="img-box bg-zinc-700 rounded-full overflow-hidden w-9">
                        <img src="/images/avatar-1.jpg"
                         width={40}
                         height={40}
                         alt="shubham image"
                         className='w-full h-full rounded-full object-cover'/>
                    </figure>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className='relative w-2 h-2 rounded-full bg-green-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'>
                            </span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 style={headlineStyle} className='max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-5xl leading-tight font-semibold lg:text-[55px] lg:leading-[1.15]'>
                    Building scalable Modern Website for the future
                </h2>
                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                      label="Contact Me" 
                      href="#contact"
                    />
                    <a href="#work" className='px-6 py-3 border border-zinc-700 rounded-xl'>View Work</a>
                </div>
            </div>
            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                    <img src="/images/hero-banner.png"
                    width={656}
                    height={700}
                    alt="" className='w-full'/>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero