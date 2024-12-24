/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "border-primary": "rgba(var(--border))",
        card: "rgba(var(--card))",
        input: "rgba(var(--input))",
        primary: "rgba(var(--copy-primary))",
        secondary: "rgba(var(--copy-secondary))",
      },
    },
  },
  plugins: [],
};
