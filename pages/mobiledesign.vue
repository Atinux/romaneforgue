<template>
  <project>
    <h1>Mobile Design</h1>
    <row center-xs middle-xs between-xs>
      <column md="6">
        <div class="video">
          <iframe src="https://www.youtube.com/embed/TIxLEbfom4Q" frameborder="0" allowfullscreen>
          </iframe>
        </div>
      </column>
      <column md="6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </column>
    </row>
  </project>
</template>

<script>
import Project from '~components/Project.vue'

export default {
  head () {
    return {
      title: 'Romane Forgue - Mobiledesign',
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

<style lang="scss">
.video
{
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  position: relative;
  margin: 30px 0;
  iframe, embed, object
  {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
