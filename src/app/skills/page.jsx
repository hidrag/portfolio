import { fetchSkills } from '@/lib/api'

export const metadata = {
	title: 'Skills | Abhishek Roy',
}

export default async function SkillsPage() {
	const skillGroups = await fetchSkills()

	return (
		<section className='max-w-6xl mx-auto px-4 py-16'>
			<h1 className='text-4xl font-bold text-blue-400 mb-10'>Skills</h1>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{skillGroups.map((group) => (
					<div
						key={group.category}
						className='bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700'>
						<h2 className='text-xl font-semibold text-blue-300 mb-4'>
							{group.category}
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
