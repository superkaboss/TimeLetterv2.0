import Link from 'next/link'

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: ['1 hour sessions', 'Basic analytics', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$19.99',
    features: ['2 hour sessions', 'Advanced analytics', 'Priority email support', 'Custom themes'],
  },
  {
    name: 'Enterprise',
    price: '$49.99',
    features: ['Unlimited sessions', 'Full analytics suite', '24/7 phone support', 'Custom integrations'],
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-gray-700 rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">{plan.price}<span className="text-sm text-gray-400">/month</span></p>
              <ul className="text-gray-300 mb-6 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-center">
                Choose {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}