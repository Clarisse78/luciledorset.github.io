module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js", // Adjust this line to include any file types that might contain Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
