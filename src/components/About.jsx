import React from 'react'

const aboutItems = [
  {
    label: 'Projects Completed',
    number: 15
  },
  {
    label: 'Years of Experience',
    number: 2
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Section Header with Side Images */}
        <div className="text-center mb-16 relative">
          {/* Left Image - Fixed 120x120px */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
            <img 
              src="/images/BMO.png" 
              alt="Decoration"
              style={{ 
                width: '120px', 
                height: '120px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Center Header with Background Box */}
          <div className="inline-block">
            <h2 
              className="px-8 py-3 text-4xl md:text-5xl uppercase mb-4 inline-block"
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

          {/* Right Image - Fixed 120x120px */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <img 
              src="/images/Hacker.png" 
              alt="Decoration"
              style={{ 
                width: '120px', 
                height: '120px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Text */}
          <div className="mb-12 space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed">
            <p>
              Welcome! I'm <span className="text-emerald-400 font-bold">Shubham Singh</span>, a professional web developer with a knack for crafting visually stunning and highly functional websites. I don't skip over any of the hard parts. I break those hard parts down into smaller chunks, understand the{' '}
              <span className="text-cyan-400 font-bold">"why"</span> behind it, and make it work.
            </p>
            
            <p>
              Combining <span className="text-pink-400 font-bold">creativity</span> and{' '}
              <span className="text-purple-400 font-bold">technical expertise</span>, I transform your vision into digital masterpiece that excels in both appearance and performance. We'll get you to that "A-ha moment" over and over again — until you've mastered it all.
            </p>
          </div>

          {/* Stats Grid - Same style as skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <article className="fireship-card card-green p-8 text-center">
              <div 
                className="text-6xl font-black mb-3"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  color: 'var(--brand-charcoal)',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                }}
              >
                15+
              </div>
              <div 
                className="uppercase tracking-wide text-sm font-bold"
                style={{ 
                  color: 'var(--brand-charcoal)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: '0.1em'
                }}
              >
                Projects Completed
              </div>
            </article>

            <article className="fireship-card card-green p-8 text-center">
              <div 
                className="text-6xl font-black mb-3"
                style={{ 
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  color: 'var(--brand-charcoal)',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                }}
              >
                2+
              </div>
              <div 
                className="uppercase tracking-wide text-sm font-bold"
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