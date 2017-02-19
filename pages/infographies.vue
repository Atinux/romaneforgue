<template>
  <project>
    <h1>Infographies</h1>
    <row center-xs middle-xs between-xs>
      <column>
        <p>
          Découvrez ci-dessous quelques travaux d’infographies que j’ai réalisé au cours de mes études. Le but ici est de traduire des informations sous forme graphique afin de faire comprendre le sujet traité par l’image. Pour ces créations j’ai utilisé Illustrator et le style graphique que j’ai choisi est essentiellement du flat design.
        </p>
      </column>
      <column>
        <img src="~assets/images/infographies/info-graphic.jpg" alt="Info Graphic">
      </column>
      <column>
        <img src="~assets/images/infographies/cop21.png" alt="COP 21">
      </column>
    </row>
  </project>
</template>

<script>
import Project from '~components/Project.vue'

export default {
  head () {
    return {
      title: 'Romane Forgue - Infographies',
      meta: [
        { hid: 'description', name: 'description', content: 'Découvrez quelques travaux d’infographies que j’ai réalisé au cours de mes études.' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
