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
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="fireship-header mb-6">THAT "A-HA" MOMENT</h2>
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

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {aboutItems.map(({ label, number }, key) => (
              <div 
                key={key}
                className="fireship-card border-emerald-400 p-8 text-center hover:shadow-[0_20px_50px_rgba(52,211,153,0.2)]"
              >
                <div className="text-5xl font-black text-emerald-400 mb-3">
                  {number}+
                </div>
                <div className="text-zinc-400 font-bold uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
