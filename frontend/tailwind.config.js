/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",  // blue-500
        success: "#22c55e",  // green-500
        danger: "#ef4444",   // red-500
        warning: "#f59e0b",  // amber-500
        muted: "#64748b",    // slate-500
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
