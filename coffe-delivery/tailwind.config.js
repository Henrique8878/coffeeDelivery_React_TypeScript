/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "yellow-dark":"#C47F17",
        "yellow":"#dbac2c",
        "yellow-light":"#f1e9c9",
        "purple-dark":"#4b2995",
        "purple":"8047f8",
        "purple-light":"#ebe5f9",
        "base-title":"#27221",
        "base-subtitle":"#403937","base-text":"#574f4d",
        "base-label":"#8d8686",
        "base-hover":"#d7d5d5",
        "base-button":"#e6e5e5",
        "base-input":"#ededed",
        "base-card":"#f3f2f2",
        "background":"#fafafa",
        "white":"#ffffff"
        },
      textColor:{
        "purple-dark":"#4b2995",
        "purple":"8047f8",
        "purple-light":"#ebe5f9",
        "yellow-dark":"#C47F17",
        "yellow":"#dbac2c",
        "yellow-light":"#f1e9c9",
        "base-title":"#27221",
        "base-subtitle":"#403937","base-text":"#574f4d",
        "base-label":"#8d8686",
        "base-hover":"#d7d5d5",
        "base-button":"#e6e5e5",
        "base-input":"#ededed",
        "base-card":"#f3f2f2",
        "background":"#fafafa",
        "white":"#ffffff"
      },
      borderColor:{
        "purple-dark":"#4b2995",
        "purple":"8047f8",
        "purple-light":"#ebe5f9",
        "yellow-dark":"#C47F17",
        "yellow":"#dbac2c",
        "yellow-light":"#f1e9c9",
        "base-title":"#27221",
        "base-subtitle":"#403937","base-text":"#574f4d",
        "base-label":"#8d8686",
        "base-hover":"#d7d5d5",
        "base-button":"#e6e5e5",
        "base-input":"#ededed",
        "base-card":"#f3f2f2",
        "background":"#fafafa",
        "white":"#ffffff"
      },
      screens:{
        'max-1000':{'max':'1000px'}
      }
   },
  },
  plugins: [],
}

