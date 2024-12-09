export default {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your paths here
  ],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        slide: "slide 8s linear infinite",
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slide: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(100px)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
