'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LogIn, UserPlus, DollarSign, LogOut } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Login', href: '/login', icon: LogIn },
  { name: 'Register', href: '/register', icon: UserPlus },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Logout', href: '/logout', icon: LogOut },
]

export default function SideMenu() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="text-2xl font-bold mb-8">Work Planner</div>
      <ul>
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.name} className="mb-4">
              <Link href={item.href} className={`flex items-center p-2 rounded-lg ${pathname === item.href ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
                <Icon className="mr-3" size={20} />
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}