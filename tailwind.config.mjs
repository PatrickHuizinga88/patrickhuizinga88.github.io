/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				display: ['Righteous', 'cursive'],
				handwriting: ['Oleo Script', 'cursive']
			},
			colors: {
				primary: {
					50: "#F2ECFE",
					100: "#E9DEFD",
					200: "#D0B7FA",
					300: "#BA96F8",
					400: "#A475F6",
					500: "#8C50F3",
					600: "#6515EF",
					700: "#4A0CB5",
					800: "#310877",
					900: "#19043E",
					950: "#0C021D"
				},
				secondary: {
					50: "#EEF7FC",
					100: "#DDEEF8",
					200: "#B7DBF0",
					300: "#95CBEA",
					400: "#6FB8E2",
					500: "#4CA7DB",
					600: "#278AC3",
					700: "#1E6995",
					800: "#144562",
					900: "#0A2433",
					950: "#051219"
				},
			},
			strokeWidth: {
			  '3': '3px'
			},
			animation: {
				'fade-up': 'fade-up .7s cubic-bezier(.28,.61,.67,.99)'
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(1.5rem)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			},
		},
		container: {
			center: true
		},
	},
	safelist: [
		{ pattern: /from-(primary|secondary|white|neutral|teal|rose|indigo)-(200|300|500|950)/ },
		{ pattern: /via-(primary|secondary|white|neutral|teal|rose|indigo)-(200|300|500|950)/ },
		{ pattern: /to-(primary|secondary|white|neutral|teal|rose|indigo)-(200|300|500|950)/ },
		{ pattern: /bg-(primary|secondary|white|neutral|teal|rose|indigo)-(200|300|500|950)/ },
	],
	plugins: [
		require("tailwindcss-animate"),
	],
}
