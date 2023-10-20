/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridAutoColumns: {
        "3fr": "minmax(1fr, 3fr)",
      },
    },
  },
  plugins: [],
};
