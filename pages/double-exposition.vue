<template>
  <project>
    <h1>Double Exposition</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
