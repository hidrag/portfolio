import { fetchProjects } from '@/lib/api'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
	title: 'Projects | Abhishek Roy',
	description: 'Showcase of WordPress, Shopify and full-stack web projects.',
}

export default async function ProjectsPage() {
	const projects = await fetchProjects()

	return (
		<section className='max-w-6xl mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold text-center text-blue-400 mb-8'>
				My Projects
			</h1>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project) => (
					<ProjectCard
						key={project._id}
						project={project}
					/>
				))}
			</div>
		</section>
	)
}
