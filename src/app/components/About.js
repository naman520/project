export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Rebrand Your Vision
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We live and breathe signage, and we're obsessed with delivering exceptional work. 
              Based in New Delhi but serving PAN India, we've grown our presence from Chandigarh to Kerala.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We're creative architects who turn ideas into vibrant reality through simple, effective solutions. 
              Our expertise spans acrylic displays, LED signage, promotional materials, and safety solutions.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">PS</span>
                </div>
                <div className="text-gray-400">Award-Winning Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}