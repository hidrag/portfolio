'use client'

import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/style.css'

export default function LightboxGallery({ images = [], title }) {
	return (
		<Gallery>
			<div className='grid sm:grid-cols-2 gap-6'>
				{images.map((src, index) => (
					<Item
						key={index}
						original={src}
						thumbnail={src}
						width={1600}
						height={900}>
						{({ ref, open }) => (
							<img
								ref={ref}
								onClick={open}
								src={src}
								alt={`${title} screenshot ${index + 1}`}
								className='cursor-pointer rounded-lg object-cover w-full h-64'
							/>
						)}
					</Item>
				))}
			</div>
		</Gallery>
	)
}
