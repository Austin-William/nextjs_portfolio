import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px"	,
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrains-mono)",
	},
  	extend: {
  		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: '#ffc300',
				hover: '#ffc300',
			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
