<template>
  <div class="Silver">
    <banner/>
    <intro/>
    <projects/>
    <contact/>
  </div>
</template>

<script>
import Banner from '~components/Banner.vue'
import Intro from '~components/Intro.vue'
import Projects from '~components/Projects.vue'
import Contact from '~components/Contact.vue'

export default {
  components: {
    Banner,
    Intro,
    Projects,
    Contact
  }
}
</script>

<style lang="scss">
.Silver
{
  background-color: #eee;
}
</style>
