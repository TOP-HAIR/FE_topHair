/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      gridAutoColumns: {
        "3fr": "minmax(1fr, 3fr)",
      },
      minWidth: {
        "18rem": "18rem",
      },
      maxWidth: {
        "screen-lg": "1024px",
      },
      width: {
        "0.5rem": "0.5rem",
      },
    },
  },
  plugins: [],
};
