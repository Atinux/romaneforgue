<template>
  <project>
    <h1>Webdesign</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Voici ci-dessous un de mes projets web design, vous trouverez les premières maquettes du site. Dumbble est un projet de site de jeux que je réalise en collaboration avec un ami développeur.
        </p>
      </column>
      <column>
        <row between-xs>
          <column md="6">
            <img src="~assets/images/webdesign/Dumbble.png" alt="Dumbble">
          </column>
          <column md="6">
            <img src="~assets/images/webdesign/Winner.png" alt="Winner">
          </column>
          <column md="6">
            <img src="~assets/images/webdesign/404.jpg" alt="404 page">
          </column>
          <column xs="6" sm="4" md="3">
            <img src="~assets/images/webdesign/Joker2.png" alt="Joker 2">
          </column>
          <column xs="6" sm="4" md="3">
            <img src="~assets/images/webdesign/Joker3.png" alt="Joker 3">
          </column>
          <column xs="6" sm="4" md="3">
            <img src="~assets/images/webdesign/CarteCarreau1.png" alt="Carte Carreau">
          </column>
          <column xs="6" sm="4" md="3">
            <img src="~assets/images/webdesign/JackCoeur.png" alt="JackCoeur">
          </column>
          <column xs="6" sm="4" md="3">
            <img src="~assets/images/webdesign/QueenTrefle.png" alt="Queen Trefle">
          </column>
          <column xs="6" sm="4" md="3">
            <img src="~assets/images/webdesign/RoiPique.png" alt="Roi Pique">
          </column>
        </row>
      </column>
    </row>
  </project>
</template>

<script>
import Project from '~components/Project.vue'

export default {
  head () {
    return {
      title: 'Romane Forgue - Webdesign',
      meta: [
        { hid: 'description', name: 'description', content: 'umbble est un projet de site de jeux que je réalise en collaboration avec un ami développeur.' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
