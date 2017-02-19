<template>
  <container>
    <row center-xs>
      <column xs="11">
        <section class="Project">
          <nuxt-link to="/" class="Close__Button">
            X
          </nuxt-link>
          <slot/>
        </section>
      </column>
    </row>
  </container>
</template>

<style lang="scss">
.Project
{
  padding: 15px 0;
  h1
  {
    font-size: 42px;
    font-weight: 300;
    text-align: left;
    padding-bottom: 30px;
    padding-right: 100px;
  }
  h2
  {
    font-size: 36px;
    font-weight: 300;
    padding-bottom: 30px;
  }
  p
  {
    padding-bottom: 30px;
    text-align: justify;
    line-height: 26px;
  }
  img
  {
    display: inline-block;
    max-width: 100%;
    // max-height: calc(100vh - 150px);
  }
  @media (min-width: 991px)
  {
    padding: 30px 0;
  }
}
.Close__Button
{
  position: fixed;
  top: 30px;
  right: 30px;
  color: #000;
  font-size: 36px;
  font-weight: 300;
  background-color: #fff;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  &:hover
  {
    color: #fff;
    background-color: #000;
  }
  @media (min-width: 991px)
  {
    right: 50px;
  }
}
</style>
