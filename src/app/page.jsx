import Link from 'next/link'
import { fetchProjects } from '@/lib/api'

export default async function HomePage() {
	const projects = await fetchProjects()

	const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 4)
	return (
		<section className='relative'>
			{/* Background Gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-gray-800/40 to-gray-900 -z-10'></div>

			<div className='max-w-6xl mx-auto px-4 py-20'>
				{/* HERO SECTION */}
				<div className='fade-in-up grid md:grid-cols-2 gap-10 items-center mb-20'>
					{/* Text */}
					<div>
						<h1 className='text-4xl md:text-5xl font-bold text-blue-400 mb-4'>
							Hi, I’m Abhishek Roy
						</h1>

						<p className='text-gray-300 text-lg md:text-xl leading-relaxed mb-6'>
							Backend-focused WordPress & WooCommerce developer
							with 9+ years of experience. Strong background in
							Shopify and eCommerce systems. Currently expanding
							into full-stack development using React, Express,
							Node.js, MongoDB, and Python-based automation.
						</p>

						<div className='mt-8 flex gap-4'>
							<Link
								href='/projects'
								className='bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-sm font-semibold'>
								View Projects
							</Link>

							<Link
								href='/contact'
								className='border border-blue-400 text-blue-400 px-6 py-3 rounded text-sm font-semibold hover:bg-blue-400 hover:text-gray-900 transition'>
								Contact Me
							</Link>
						</div>
					</div>

					{/* Avatar */}
					<div className='flex justify-center'>
						<img
							src='/profile.jpg'
							alt='Abhishek Roy'
							className='w-48 h-48 rounded-full border border-gray-700 shadow-lg object-cover'
						/>
					</div>
				</div>

				{/* STATS SECTION */}
				<div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 fade-in-up'>
					<Stat
						num='9+'
						label='Years Experience'
					/>
					<Stat
						num='80+'
						label='Projects Delivered'
					/>
					<Stat
						num='40+'
						label='WooCommerce Sites'
					/>
					<Stat
						num='4+'
						label='Tech Stack Tools'
					/>
				</div>

				{/* SKILL HIGHLIGHTS */}
				<div className='grid md:grid-cols-3 gap-8 mb-20 fade-in-up'>
					<SkillCard
						title='WordPress Expert'
						text='Custom themes, plugins, WooCommerce logic, and API integrations.'
					/>
					<SkillCard
						title='JavaScript Frameworks'
						text='React (working knowledge), Node (basic), Express (basic), MongoDB (basic), Next.js (basic), Full-stack fundamentals'
					/>
					<SkillCard
						title='Architecture & Performance'
						text='Clean code, scalable builds, debugging, speed optimizations.'
					/>
				</div>

				{/* FEATURED PROJECTS */}
				<div className='mb-20 fade-in-up'>
					<h2 className='text-3xl font-semibold text-blue-300 mb-10'>
						Featured Projects
					</h2>

					<div className='space-y-20'>
						{featuredProjects.map((project, index) => (
							<div
								key={project._id}
								className='bg-gray-800 border border-gray-700 rounded-lg p-6 grid md:grid-cols-2 gap-6'>
								{/* Alternate layout */}
								{index % 2 === 1 && (
									<img
										src={project.image}
										alt={project.title}
										className='rounded-lg object-cover shadow-lg border border-gray-700 order-2 md:order-1'
									/>
								)}

								<div
									className={
										index % 2 === 1
											? 'order-1 md:order-2'
											: ''
									}>
									<h3 className='text-2xl text-blue-400 font-semibold mb-3'>
										{project.title}
									</h3>

									<p className='text-gray-300 mb-4'>
										{project.description}
									</p>

									<p className='text-sm text-gray-400 mb-4'>
										<strong>Role:</strong> {project.role}
									</p>

									<Link
										href={`/projects/${project.title
											.toLowerCase()
											.replace(/[^a-z0-9]+/g, '-')
											.replace(/(^-|-$)/g, '')}`}
										className='text-blue-400 hover:underline'>
										View Case Study →
									</Link>
								</div>

								{index % 2 === 0 && (
									<img
										src={project.image}
										alt={project.title}
										className='rounded-lg object-cover shadow-lg border border-gray-700'
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

function SkillCard({ title, text }) {
	return (
		<div className='bg-gray-800 p-6 rounded-lg border border-gray-700 fade-in-up'>
			<h3 className='text-xl font-semibold mb-3 text-blue-300'>
				{title}
			</h3>
			<p className='text-gray-300 text-sm leading-relaxed'>{text}</p>
		</div>
	)
}

function Stat({ num, label }) {
	return (
		<div className='text-center fade-in-up'>
			<div className='text-3xl font-bold text-blue-400'>{num}</div>
			<div className='text-gray-400 text-sm'>{label}</div>
		</div>
	)
}
