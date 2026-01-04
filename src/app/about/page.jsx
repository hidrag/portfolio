export const metadata = {
	title: 'About | Abhishek Roy',
}

export default function AboutPage() {
	return (
		<section className='max-w-5xl mx-auto px-4 py-16'>
			{/* Header */}
			<h1 className='text-4xl font-bold text-blue-400 mb-6'>About Me</h1>

			{/* Summary */}
			<p className='text-gray-300 text-lg leading-relaxed mb-10'>
				I’m a backend-focused web developer with 9+ years of
				professional experience building, optimizing, and maintaining
				high-performing websites and eCommerce platforms. My core
				expertise lies in WordPress, WooCommerce, PHP, and backend
				architecture, with strong experience delivering complex business
				logic, custom plugins, and API-driven solutions.
				<br />
				<br />
				In recent years, I’ve expanded my skill set beyond CMS-based
				development into modern backend and full-stack engineering. This
				includes hands-on work with Shopify (Liquid), REST APIs,
				Express.js, MongoDB, and Python-based automation. I enjoy
				working on systems where clean architecture, performance, and
				maintainability matter.
			</p>

			{/* Timeline */}
			<div className='mb-12'>
				<h2 className='text-2xl font-semibold text-blue-300 mb-4'>
					Experience Snapshot
				</h2>

				<div className='space-y-6 border-l border-gray-700 pl-6'>
					<div>
						<h3 className='text-gray-200 font-semibold'>
							2014 — 2020
						</h3>
						<p className='text-gray-400 text-sm mt-1'>
							Core WordPress development including custom themes,
							custom post types, ACF-based architectures,
							WooCommerce customization, and performance
							optimization for content-heavy and service websites.
						</p>
					</div>

					<div>
						<h3 className='text-gray-200 font-semibold'>
							2020 — 2024
						</h3>
						<p className='text-gray-400 text-sm mt-1'>
							Advanced WooCommerce development with complex
							checkout flows, custom pricing logic, REST API
							integrations, plugin development, website security,
							and scalable backend architecture for eCommerce
							platforms.
						</p>
					</div>

					<div>
						<h3 className='text-gray-200 font-semibold'>
							2024 — Present
						</h3>
						<p className='text-gray-400 text-sm mt-1'>
							Expanded into Shopify development and began a
							focused transition toward backend and full-stack
							engineering. Hands-on work with Express.js, MongoDB,
							Next.js, and Python automation, building API-driven
							systems and data-processing tools alongside CMS
							projects.
						</p>
					</div>
				</div>
			</div>

			{/* Strengths */}
			<div>
				<h2 className='text-2xl font-semibold text-blue-300 mb-4'>
					What I’m Good At
				</h2>

				<ul className='grid sm:grid-cols-2 gap-4 text-gray-300'>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Backend-heavy WordPress & WooCommerce architecture
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Custom plugins, APIs, and business logic implementation
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Shopify theme development and Liquid customization
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						REST API design, data modeling, and integrations
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Performance optimization, scalability, and security
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Learning and applying modern backend tools (Node,
						MongoDB, Python)
					</li>
				</ul>
			</div>
		</section>
	)
}
