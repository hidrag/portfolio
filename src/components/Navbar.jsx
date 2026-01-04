'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/skills', label: 'Skills' },
		{ href: '/contact', label: 'Contact' },
	]

	return (
		<header className='bg-gray-800 text-gray-100 sticky top-0 z-50 shadow-md'>
			<nav className='max-w-6xl mx-auto p-4 flex items-center justify-between'>
				{/* Logo */}
				<Link
					href='/'
					className='flex items-center gap-2'>
					<Image
						src='/logo.png'
						alt='Abhishek Roy Logo'
						width={64}
						height={64}
					/>
					{/* <span className='font-semibold text-blue-400'>
						Abhishek Roy
					</span> */}
				</Link>

				{/* Mobile Hamburger */}
				<button
					className='md:hidden text-gray-300 text-2xl'
					onClick={() => setOpen(!open)}>
					☰
				</button>

				{/* Desktop Menu */}
				<ul className='hidden md:flex gap-6 text-sm'>
					{navItems.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								className={`hover:text-blue-400 transition-colors ${
									pathname === href ? 'text-blue-400' : ''
								}`}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile Menu */}
			{open && (
				<ul className='md:hidden bg-gray-800 border-t border-gray-700 px-4 pb-4 space-y-3 animate-slideDown'>
					{navItems.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								onClick={() => setOpen(false)}
								className={`block py-2 text-sm hover:text-blue-400 transition-colors ${
									pathname === href ? 'text-blue-400' : ''
								}`}>
								{label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</header>
	)
}
