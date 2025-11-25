import projects from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import LightboxGallery from '@/components/LightboxGallery'

export async function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetails({ params }) {
	const resolvedParams = await params
	const project = projects.find((p) => p.slug === resolvedParams.slug)

	if (!project) {
		return (
			<div className='max-w-4xl mx-auto py-20 text-center'>
				<h1 className='text-3xl font-bold text-red-400'>
					Project not found
				</h1>
			</div>
		)
	}

	return (
		<section className='max-w-5xl mx-auto px-4 py-10'>
			{/* Title + Year */}
			<div className='mb-6'>
				<h1 className='text-4xl font-bold text-blue-400 mb-1'>
					{project.title}
				</h1>
				<span className='text-gray-400 text-sm'>{project.year}</span>
			</div>

			{/* Role */}
			<p className='text-gray-300 mb-6'>
				<span className='font-semibold text-gray-200'>Role: </span>
				{project.role}
			</p>

			{/* Description */}
			<p className='text-gray-300 leading-relaxed mb-8'>
				<span className='font-semibold text-gray-200'>
					Description:{' '}
				</span>
				{project.description}
			</p>

			{/* Tech Stack */}
			<div className='mb-8'>
				<h2 className='text-2xl font-semibold text-blue-300 mb-3'>
					Tech Stack
				</h2>
				<div className='flex flex-wrap gap-2'>
					{project.technologies.map((tech) => (
						<span
							key={tech}
							className='bg-gray-800 px-3 py-1 text-xs rounded text-gray-200'>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Screenshots */}
			{project.screenshots?.length > 0 && (
				<div className='mb-10'>
					<h2 className='text-2xl font-semibold text-blue-300 mb-4'>
						Screenshots
					</h2>

					<LightboxGallery
						images={project.screenshots}
						title={project.title}
					/>
				</div>
			)}

			{/* Live site */}
			{project.liveLink && (
				<div>
					<Link
						href={project.liveLink}
						target='_blank'
						className='inline-block mt-4 text-blue-400 hover:underline text-lg'>
						Visit Live Site ↗
					</Link>
				</div>
			)}
		</section>
	)
}
