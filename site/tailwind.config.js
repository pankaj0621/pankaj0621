/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        background: "var(--bg)",
        surface: "var(--surface)",
        "surface-glass": "var(--surface-glass)",
        violet: "var(--purple)",
        lilac: "var(--lilac)",
        cyan: "var(--cyan)",
        paper: "var(--text)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
};
