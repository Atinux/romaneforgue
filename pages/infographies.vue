<template>
  <project>
    <h1>Infographies</h1>
    <row center-xs middle-xs between-xs>
      <column>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
