/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				 'primary': ['DM Sans Variable', 'sans-serif']
			},
			colors: {
				'purple-100': 'hsl(254, 88%, 90%)',
				'purple-500': 'hsl(256, 67%, 59%)',
				'yellow-100': 'hsl(31, 66%, 93%)',
				'yellow-500': 'hsl(39, 100%, 71%)',
				'grey-100': '#F2F2F2'
			},
		},
	},
	plugins: [],
}