// src/components/Footer.jsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
	const year = new Date().getFullYear()
	const pathname = usePathname()

	// Helper to check active or sub-route
	const isActive = (path) =>
		path === '/'
			? pathname === '/'
			: pathname === path || pathname.startsWith(`${path}/`)

	const navLinkClass = (path) =>
		`transition hover:underline ${
			isActive(path) ? 'text-blue-300 font-semibold' : 'text-blue-400'
		}`

	return (
		<footer className='bg-gray-800 border-t border-gray-700 text-gray-400 text-sm'>
			<div className='max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4'>
				{/* Footer Navigation */}
				<nav className='flex gap-6'>
					<Link
						href='/'
						className={navLinkClass('/')}>
						Home
					</Link>
					<Link
						href='/about'
						className={navLinkClass('/about')}>
						About
					</Link>
					<Link
						href='/skills'
						className={navLinkClass('/skills')}>
						Skills
					</Link>
					<Link
						href='/projects'
						className={navLinkClass('/projects')}>
						Projects
					</Link>
					<Link
						href='/contact'
						className={navLinkClass('/contact')}>
						Contact
					</Link>
				</nav>

				{/* Copyright */}
				<p className='text-center md:text-right'>
					© {year} Abhishek Roy. Built with{' '}
					<span className='text-blue-400'>Next.js</span>,{' '}
					<span className='text-blue-400'>Express.js</span> &{' '}
					<span className='text-blue-400'>Tailwind CSS</span>.
				</p>
			</div>
		</footer>
	)
}
