const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchProjects() {
	const res = await fetch(`${API_BASE}/api/projects`)
	if (!res.ok) {
		throw new Error('Failed to fetch projects')
	}
	return res.json()
}

export async function fetchSkills() {
	const res = await fetch(`${API_BASE}/api/skills`)
	if (!res.ok) {
		throw new Error('Failed to fetch skills')
	}
	return res.json()
}
