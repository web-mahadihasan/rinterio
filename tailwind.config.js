/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "primary-color": "#ABEF5F",
      "primary-color-light": "rgba(171, 239, 95, 0.5)",
      "text-light": "rgb(115, 115, 115)",
      "text-dark": "rgb(73, 73, 73)",
      "text-black": "rgb(33, 33, 33)",
      "bg-secondary": "rgb(244, 244, 244)",
    },
    extend: {
      backgroundImage: {
        'review': "url('../assets/review-2.jpg')",
      },
    },
  },
  plugins: [],
};
