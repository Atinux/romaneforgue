<template>
  <project>
    <h1>Double Exposition</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Ces réalisations de double exposition ont été faites via le logiciel Photoshop pour des projets personnels. La double exposition, aussi appelée surimpression, est un procédé qui permet de superposer deux images prises à deux moments différents pour n’en faire qu’une seule. De manière générale j’aime utiliser cette technique pour mélanger l’humain à la nature ou aux paysages.
        </p>
      </column>
      <column>
        <row between-xs>
          <column sm="6" md="4">
            <img src="~assets/images/photos/de_alexbranch.jpg" alt="Alex Branch">
          </column>
          <column sm="6" md="4">
            <img src="~assets/images/photos/de_robine.jpg" alt="Robine">
          </column>
          <column sm="6" md="4">
            <img src="~assets/images/photos/de_romountain.jpg" alt="Romountain">
          </column>
          <column sm="6" md="5">
            <img src="~assets/images/photos/de_row.jpg" alt="Row">
          </column>
          <column sm="5" md="7">
            <img src="~assets/images/photos/de_SMnature.jpg" alt="SM Nature">
          </column>
          <column sm="7" md="6">
            <img src="~assets/images/photos/de_alfox.jpg" alt="Alex Fox">
          </column>
          <column md="6">
            <img src="~assets/images/photos/de_jazzy.jpg" alt="Jazzy">
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
      title: 'Romane Forgue - Double Exposition',
      meta: [
        { hid: 'description', name: 'description', content: 'Ces réalisations de double exposition ont été faites via le logiciel Photoshop pour des projets personnels.' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
