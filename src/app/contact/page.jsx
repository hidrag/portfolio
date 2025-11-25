export const metadata = {
	title: 'Contact | Abhishek Roy',
}

export default function ContactPage() {
	return (
		<section className='max-w-xl mx-auto px-4 py-16'>
			<h1 className='text-4xl font-bold text-blue-400 mb-8'>Contact</h1>

			<p className='text-gray-300 mb-8 leading-relaxed'>
				For collaboration, project inquiries, or opportunities, feel
				free to reach out. I usually reply within 12 hours.
			</p>

			<div className='space-y-6'>
				<ContactRow
					label='Email'
					value='abhishek.mumbai@gmail.com'>
					<a
						href='mailto:abhishek.mumbai@gmail.com'
						className='text-blue-400 hover:underline'>
						abhishek.mumbai@gmail.com
					</a>
				</ContactRow>

				<ContactRow label='Github'>
					<a
						href='https://github.com/hidrag'
						target='_blank'
						className='text-blue-400 hover:underline'>
						github.com/hidrag
					</a>
				</ContactRow>

				<ContactRow label='LinkedIn'>
					<a
						href='https://www.linkedin.com/in/abhishekry/'
						target='_blank'
						className='text-blue-400 hover:underline'>
						https://www.linkedin.com/in/abhishekry/
					</a>
				</ContactRow>
			</div>
		</section>
	)
}

function ContactRow({ label, children }) {
	return (
		<div className='bg-gray-800 border border-gray-700 p-4 rounded-lg'>
			<span className='block text-blue-300 font-semibold text-sm mb-1'>
				{label}
			</span>
			<div className='text-gray-200'>{children}</div>
		</div>
	)
}
