// src/components/ProjectCard.jsx
import Image from 'next/image'
import Link from 'next/link'

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')
}

export default function ProjectCard({ project }) {
	const slug = slugify(project.title)

	return (
		<div className='bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow'>
			{/* Featured Image */}
			{project.image && (
				<div className='relative h-48 w-full'>
					<Image
						src={project.image}
						alt={project.title}
						fill
						className='object-cover'
					/>
				</div>
			)}

			<div className='p-5'>
				{/* Title + Year */}
				<div className='flex items-center justify-between mb-2'>
					<h3 className='text-xl font-semibold text-blue-400'>
						{project.title}
					</h3>
					<span className='text-xs text-gray-400'>
						{project.year}
					</span>
				</div>

				{/* Short Description */}
				<p className='text-sm text-gray-300 mb-3 line-clamp-3'>
					{project.description}
				</p>

				{/* Tech Stack */}
				<div className='flex flex-wrap gap-2 mb-4'>
					{project.tech.map((tech) => (
						<span
							key={tech}
							className='bg-gray-700 text-gray-200 px-2 py-1 text-xs rounded'>
							{tech}
						</span>
					))}
				</div>

				{/* Buttons */}
				<div className='flex gap-4 text-sm'>
					{project.live && (
						<Link
							href={project.live}
							target='_blank'
							className='text-blue-400 hover:underline'>
							Live Site ↗
						</Link>
					)}

					{project.projectType === 'engineering' &&
						project.github && (
							<Link
								href={project.github}
								target='_blank'
								className='text-blue-400 hover:underline'>
								GitHub ↗
							</Link>
						)}

					<Link
						href={`/projects/${slug}`}
						className='text-gray-400 hover:text-blue-300'>
						Details →
					</Link>
				</div>
			</div>
		</div>
	)
}
