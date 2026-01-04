export const dynamic = 'force-dynamic'
import { fetchProjects } from '@/lib/api'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BackButton from '@/components/BackButton'
import LightboxGallery from '@/components/LightboxGallery'

function slugify(text) {
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')
}

export default async function ProjectDetailPage(props) {
	const { slug } = await props.params // ✅ FIX: await params

	const projects = await fetchProjects()

	const project = projects.find((p) => slugify(p.title) === slug)

	if (!project) {
		return notFound()
	}

	return (
		<section className='max-w-4xl mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold text-blue-400 mb-4'>
				{project.title}
			</h1>

			<p className='text-gray-400 mb-2'>
				<strong>Year:</strong> {project.year}
			</p>

			<p className='text-gray-400 mb-2'>
				<strong>Role:</strong> {project.role}
			</p>

			<p className='mb-6'>{project.description}</p>

			{project.image && (
				<Image
					src={project.image}
					alt={project.title}
					width={800}
					height={450}
					className='rounded mb-6'
				/>
			)}

			<div className='mb-6'>
				<h3 className='font-semibold mb-2'>Tech Stack</h3>
				<ul className='flex flex-wrap gap-2'>
					{project.tech.map((tech) => (
						<li
							key={tech}
							className='bg-blue-600/20 text-blue-300 px-3 py-1 rounded text-sm'>
							{tech}
						</li>
					))}
				</ul>
			</div>

			<div className='flex gap-4 mb-8'>
				{project.live && (
					<a
						href={project.live}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-400 underline'>
						Live Site
					</a>
				)}

				{project.projectType === 'engineering' && project.github && (
					<a
						href={project.github}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-400 underline'>
						GitHub Repo
					</a>
				)}
			</div>

			{project.screenshots?.length > 0 && (
				<div className='mt-10'>
					<h3 className='font-semibold mb-4'>Screenshots</h3>
					<LightboxGallery
						images={project.screenshots}
						title={project.title}
					/>
				</div>
			)}
			<div className='flex gap-4 mt-8'>
				<BackButton />
			</div>
		</section>
	)
}
