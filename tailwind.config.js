/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // tema claro
        'beige-suave': '#f8ede3',
        'beige-lino': '#dfd3c3',
        'rosa-antiguo': '#121063',
        'pardo-oscuro': '#85586f',
        'melocoton-claro': '#dba39a',
        'gris-tormenta': '#65647c',
        'lila': '#debace',
        'marron-arcilla': '#8b7e74',
        'azul-uva': '#7f669d',

        // tema oscuro
        'morado-oscuro': '#635985',
        'morado-ahumado': '#443c68',
        'azul-noche': '#393053',
        'azul-petroleo': '#060047',
        'violeta-electrico': '#865dff',
        'negro-azabache': '#18122b',
        'lila-electrico': '#e384ff',
        'rosa-palido': '#ffa3fd',
        'azul-turquesa': '#3795bd',
      },
    },
  },
  plugins: [],
};
