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
				I’m a backend-heavy WordPress & WooCommerce developer with 9+
				years of experience building high-performing eCommerce, service,
				and API-driven platforms. I also have experience with Shopify
				development. Over the past year, I’ve been transitioning into
				full-stack JavaScript development with React, Express, Node, and
				MongoDB.
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
							WordPress development, custom themes, custom post
							types, custom fields, WooCommerce customizations,
							performance optimization.
						</p>
					</div>

					<div>
						<h3 className='text-gray-200 font-semibold'>
							2020 — 2024
						</h3>
						<p className='text-gray-400 text-sm mt-1'>
							Advanced WooCommerce logic, REST APIs, plugin
							development, complex checkout flows, full website
							architecture, website security.
						</p>
					</div>

					<div>
						<h3 className='text-gray-200 font-semibold'>
							2024 — Present
						</h3>
						<p className='text-gray-400 text-sm mt-1'>
							Learned Shopify development. Now I mainly work on
							WordPress and Shopify projects. Also learning
							full-stack JavaScript development with React,
							Express, Node, and MongoDB.
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
						Building scalable WordPress backends
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						WooCommerce custom logic & integrations
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						API design & REST workflows
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Shopify theme development & Liquid
					</li>
					<li className='bg-gray-800 px-4 py-3 rounded'>
						Performance tuning, website optimization & security
					</li>
				</ul>
			</div>
		</section>
	)
}
