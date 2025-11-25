// src/components/Footer.jsx
export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-gray-800 text-gray-400 text-center py-4 text-sm'>
			<p>
				© {year} Abhishek Roy. Built with{' '}
				<span className='text-blue-400'>Next.js</span> &{' '}
				<span className='text-blue-400'>Tailwind CSS</span>.
			</p>
		</footer>
	)
}
