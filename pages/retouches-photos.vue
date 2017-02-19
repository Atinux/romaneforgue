<template>
  <project>
    <h1>Retouches Photos</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Les retouches photos que vous trouverez ci-dessous sont des créations réalisées à titre personnel que j’ai travaillé sur Photoshop. Vous trouverez le avant-après afin de remarquer les modifications qui ont été apportées sur certaines photos. Mon but est de sublimer les photos, j’aime jouer sur la saturation et les contrastes pour donner un effet de photo d’art.
        </p>
      </column>
      <column>
        <row between-xs>
          <column sm="6">
            <img src="~assets/images/photos/ph_flojas_a.jpg" alt="Flojas Avant">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/ph_flojas_b.jpg" alt="Flojas Apres">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/ph_jasmine_a.jpg" alt="Jasmine Avant">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/ph_jasmine_b.jpg" alt="Jasmine Apres">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/ph_manon_a.jpg" alt="Manon Avant">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/ph_manon_b.jpg" alt="Manon Apres">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/artalx.jpg" alt="Art Alex">
          </column>
          <column sm="6">
            <img src="~assets/images/photos/artja.jpg" alt="Art Jasmine">
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
      title: 'Romane Forgue - Retouches Photos',
      meta: [
        { hid: 'description', name: 'description', content: 'Les retouches photos que vous trouverez sont des créations réalisées à titre personnel que j’ai travaillé sur Photoshop.' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
