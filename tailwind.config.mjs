
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors:{
				'pryctblu': '#0E4879',
				'pryctgray': '#555555',
				'pryctlightgray': '#696969',
			}
		},
		fontFamily: {
			sans: ['expansiva'],
			serif: ['Plus Jakarta Sans Variable'],
		  },
	},
	plugins: [
		flowbitePlugin
	],
}
