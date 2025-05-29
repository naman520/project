import { Truck, Shield, Clock, Headphones } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'PAN India Shipping',
      description: 'Fast and reliable delivery across all states with tracking support'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payment',
      description: '100% secure transactions with multiple payment options'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Easy Returns',
      description: '7-day hassle-free returns after dispatch'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Dedicated customer support for all your queries'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}