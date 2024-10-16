'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    // Here you would typically clear the user's session or token
    // For this example, we'll just redirect to the home page
    router.push('/')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8">
        <p className="text-xl text-white">Logging out...</p>
      </div>
    </div>
  )
}