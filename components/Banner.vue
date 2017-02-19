<template>
  <section class="Banner">
    <container>
      <row center-xs>
        <column xs="11">
          <img class="Banner__Logo" src="../assets/images/logo.png" alt="Logo RF">
          <h1 class="Banner__Title">
            Forgue <span>Romane</span>
          </h1>
          <h3 class="Banner__Subtitle">
            Étudiante en webdesign
          </h3>
          <ul class="Banner__Actions">
            <li class="Banner__Actions__Item">
              <a href="/cv.pdf" target="_blank" class="Banner__Actions__Item__Button Banner__Actions__Item__Button--white">
                Télécharger mon CV
              </a>
            </li>
            <li class="Banner__Actions__Item">
              <a href="#contact" class="Banner__Actions__Item__Button">
                Me contacter
              </a>
            </li>
          </ul>
        </column>
      </row>
    </container>
  </section>
</template>

<style lang="scss">
.Banner
{
  color: #fff;
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  background-image: url("../assets/images/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 200px;
  padding-top: 100px;
  text-align: center;
  &__Logo
  {
    width: 120px;
    display: inline-block;
  }
  &__Title
  {
    font-weight: 400;
    font-size: 50px;
    padding-top: 30px;
    span
    {
      font-weight: 300;
    }
  }
  &__Subtitle
  {
    font-weight: 300;
    font-size: 26px;
    padding-top: 10px;
    padding-bottom: 30px;
  }
  &__Actions
  {
    list-style: none;
    padding-bottom: 50px;
    &__Item
    {
      display: inline-block;
      padding: 10px;
      &__Button
      {
        display: block;
        width: 250px;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        letter-spacing: 0.5px;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 5px;
        padding: 12px 0;
        &--white
        {
          color: #2e2f30;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
