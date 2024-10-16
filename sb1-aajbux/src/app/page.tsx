import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Work Planner & Reflector</h1>
        <p className="text-xl text-gray-300 mb-8">Plan, execute, and reflect on your work to boost productivity.</p>
        <div className="space-x-4">
          <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Get Started
          </Link>
          <Link href="/login" className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}