<template>
  <project>
    <h1>Retouches Photos</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
