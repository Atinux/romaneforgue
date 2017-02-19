<template>
  <project>
    <h1>Webdesign</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
