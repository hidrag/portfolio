// src/app/layout.jsx
import './globals.css'
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'

export const metadata = {
	title: {
		default: 'Abhishek Roy',
		template: '%s | Abhishek Roy',
	},
	description:
		'Backend-focused WordPress, WooCommerce, Shopify, and full-stack developer portfolio.',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-gray-900 text-gray-100 flex flex-col min-h-screen'>
				<Navbar />
				<main className='flex-1'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
