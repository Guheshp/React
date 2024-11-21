module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'red-orange-gradient': 'linear-gradient(90deg, #FF0000 0%, #FFA500 100%)',
      },
      textColor: {
        'red-orange-grad': 'linear-gradient(90deg, #FF0000 0%, #FFA500 100%)',
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      "light",
    ]
  }
}