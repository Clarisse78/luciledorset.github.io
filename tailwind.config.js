module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js", // Adjust this line to include any file types that might contain Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#222831'
      },
      fontSize: {
        'navLink': 'calc(17px + (19 - 17) * ((100vw - 320px)/(1140 - 320)))',
        'navButton': 'calc(var(--font-size-base) * 0.9)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
