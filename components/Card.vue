<template>
  <article class="Card" :style="style">
    <span class="Card__Image">
      <slot name="image"/>
    </span>
    <nuxt-link :to="url">
      <h2><slot/></h2>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    style () {
      return {
        backgroundImage: "url('" + this.image + "')"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Card
{
  // height: 300px;
  // transition: transform 0.5s ease, opacity 0.5s ease;
  position: relative;
  width: 100%;
  &:hover
  {
    .Card__Image:before
    {
      transition: background-color 0.5s ease;
      background-color: rgba(0, 0, 0, 0);
    }
    h2
    {
      display: none;
    }
  }
  &__Image
  {
    transition: transform 0.5s ease;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    &:before
    {
      pointer-events: none;
      transition: background-color 0.5s ease;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.75);
    }
    img
    {
      display: block;
      width: 100%;
    }
  }
  a
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease, transform 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
    border-radius: 4px;
    border-bottom: 0;
    color: #ffffff;
    text-align: center;
    text-decoration: none;
    z-index: 3;
    &:hover
    {
      color: #ffffff !important;
    }
    &:last-child
    {
      margin: 0;
    }
    h2
    {
      font-size: 28px;
      text-transform: uppercase;
      text-shadow: 1px 1px #000;
      letter-spacing: 2px;
      font-weight: 300;
      margin: 0;
    }
  }
}
</style>
