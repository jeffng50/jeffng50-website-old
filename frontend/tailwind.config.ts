import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans"'],
				gothic: ['DotGothic16']
			}
		}
	},

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#fef08a',

					'primary-content': '#161407',

					secondary: '#a5f3fc',

					'secondary-content': '#0a1416',

					accent: '#fdba74',

					'accent-content': '#160d05',

					neutral: '#111827',

					'neutral-content': '#c9cbcf',

					'base-100': '#ffffff',

					'base-content': '#161616',

					info: '#3b82f6',

					'info-content': '#160000',

					success: '#4ade80',

					'success-content': '#021206',

					warning: '#f97316',

					'warning-content': '#150500',

					error: '#ff0000',

					'error-content': '#160000',

					fontFamily: ["'Open Sans'", 'DotGothic16']
				}
			},
			{
				mythemedark: {
					primary: '#f5ba00',

					'primary-content': '#ffffff',

					secondary: '#a5f3fc',

					'secondary-content': '#0a1416',

					accent: '#fdba74',

					'accent-content': '#160d05',

					neutral: '#111827',

					'neutral-content': '#c9cbcf',

					'base-100': '#222831',

					'base-content': '#cecfd2',

					info: '#3b82f6',

					'info-content': '#160000',

					success: '#4ade80',

					'success-content': '#021206',

					warning: '#f97316',

					'warning-content': '#150500',

					error: '#ff0000',

					'error-content': '#160000',

					fontFamily: ["'Open Sans'", 'DotGothic16']
				}
			}
		]
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
} as Config;
/** @type {import('tailwindcss').Config} */
