import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Section Header with Side Images */}
        <div className="text-center mb-12 md:mb-16 relative">
          
          {/* Left Image - BIGGER, hidden on mobile/tablet */}
          <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2" style={{ left: '-80px' }}>
            <img 
              src="/images/BMO.png" 
              alt="Decoration"
              className="w-40 h-40 2xl:w-48 2xl:h-48"
              style={{ 
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Center Header with Background Box */}
          <div className="inline-block px-2">
            <h2 
              className="px-4 py-2 md:px-8 md:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase mb-2 md:mb-4 inline-block"
              style={{ 
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif", 
                letterSpacing: '0.05em',
                backgroundColor: 'var(--brand-beige)',
                color: 'var(--brand-charcoal)',
                borderRadius: '0.5rem'
              }}
            >
              THAT "A-HA" MOMENT
            </h2>
          </div>

          {/* Right Image - BIGGER, hidden on mobile/tablet */}
          <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2" style={{ right: '-80px' }}>
            <img 
              src="/images/Hacker.png" 
              alt="Decoration"
              className="w-40 h-40 2xl:w-48 2xl:h-48"
              style={{ 
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Text - Responsive */}
          <div className="mb-8 md:mb-12 space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-zinc-300 leading-relaxed">
            <p>
              Welcome! I'm <span className="text-emerald-400 font-bold">Shubham Singh</span>, a professional web developer with a knack for crafting visually stunning and highly functional websites. I don't skip over any of the hard parts. I break those hard parts down into smaller chunks, understand the{' '}
              <span className="text-cyan-400 font-bold">"why"</span> behind it, and make it work.
            </p>
            
            <p>
              Combining <span className="text-pink-400 font-bold">creativity</span> and{' '}
              <span className="text-purple-400 font-bold">technical expertise</span>, I transform your vision into digital masterpiece that excels in both appearance and performance. We'll get you to that "A-ha moment" over and over again — until you've mastered it all.
            </p>
          </div>

          {/* Stats Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
            <article className="fireship-card card-green p-6 md:p-8 text-center">
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-3"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  color: 'var(--brand-charcoal)',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                }}
              >
                15+
              </div>
              <div 
                className="uppercase tracking-wide text-xs md:text-sm font-bold"
                style={{ 
                  color: 'var(--brand-charcoal)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Projects Completed
              </div>
            </article>

            <article className="fireship-card card-green p-6 md:p-8 text-center">
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-3"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  color: 'var(--brand-charcoal)',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                }}
              >
                2+
              </div>
              <div 
                className="uppercase tracking-wide text-xs md:text-sm font-bold"
                style={{ 
                  color: 'var(--brand-charcoal)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Years of Experience
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About