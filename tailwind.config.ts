import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"nav-bg": "rgba(255, 255, 255, 0.1)",
				"nav-border": "rgba(255, 255, 255, 0.08)",
				"nav-hover": "rgba(255, 255, 255, 0.15)",
				"nav-selected": "rgba(255, 255, 255, 0.05)",
				"nav-maximize": "rgba(255, 255, 255, 0.20)",
				"nav-followers": "rgba(255, 255, 255, 0.3)",
			},
			boxShadow: {
				border:
					"0 3px 10px 2px rgba(0, 0, 0, 0.5), 0 5px 15px 2px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(87,88,89,1), inset 0 0 4px rgba(87,88,89,1)",
				highLight:
					"0 -1px 0px 0px rgba(255,255,255,0.2), 0 4px 6px -1px rgba(2, 6, 23, 1), 0 2px 4px -1px rgba(2, 6, 23, 1)",
			},
		},
	},
	plugins: [],
};
export default config;

// bg-[#1c1c24]
