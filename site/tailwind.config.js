/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1117",
        violet: "#8B5CF6",
        lilac: "#A78BFA",
        cyan: "#22D3EE",
        paper: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
