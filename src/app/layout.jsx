// src/app/layout.jsx
import './globals.css'
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'

export const metadata = {
	title: 'Abhishek Roy | Portfolio',
	description: 'WordPress and Shopify Developer Portfolio',
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
