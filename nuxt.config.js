module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Romane Forgue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Étudiante en webdesign à Bordeaux, je suis à la recherche d'un stage graphisme/webdesign pour une durée de 3 à 5 mois." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7ecaf6' },
  plugins: ['~/plugins/flexboxgrid.js']
}
