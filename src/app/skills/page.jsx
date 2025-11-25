export const metadata = {
	title: 'Skills | Abhishek Roy',
}

const skillGroups = [
	{
		title: 'Backend & CMS',
		items: ['WordPress', 'Custom Plugins', 'PHP'],
	},
	{
		title: 'Ecommerce Platforms',
		items: ['Shopify', 'WooCommerce'],
	},
	{
		title: 'Databases',
		items: ['MySQL'],
	},
	{
		title: 'Tools & Workflow',
		items: ['Git', 'GitHub', 'VS Code', 'Postman'],
	},
	{
		title: 'Currently Learning',
		items: ['MERN Stack'],
	},
]

export default function SkillsPage() {
	return (
		<section className='max-w-6xl mx-auto px-4 py-16'>
			<h1 className='text-4xl font-bold text-blue-400 mb-10'>Skills</h1>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{skillGroups.map((group) => (
					<div
						key={group.title}
						className='bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700'>
						<h2 className='text-xl font-semibold text-blue-300 mb-4'>
							{group.title}
						</h2>
						<ul className='space-y-2 text-gray-300'>
							{group.items.map((skill) => (
								<li
									key={skill}
									className='bg-gray-900 border border-gray-700 px-3 py-2 rounded text-sm'>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}
