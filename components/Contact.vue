<template>
  <footer id="contact">
    <section class="Footer">
      <container>
        <row center-xs>
          <column xs="11">
            <h2 class="Footer__Title">Me Contacter</h2>
            <form class="Footer__Form" method="POST" action="http://formspree.io/romane.forgue@hotmail.fr">
              <div class="Footer__Half">
                <input class="Footer__Field" type="text" name="title" placeholder="Titre"/>
              </div>
              <div class="Footer__Half">
                <input class="Footer__Field" type="email" name="email" placeholder="Email"/>
              </div>
              <div class="Footer__Full">
                <textarea class="Footer__Field" name="message" placeholder="Message" rows="6"></textarea>
              </div>
              <button class="Footer__Submit" type="submit">Envoyer</button>
            </form>
          </column>
        </row>
      </container>
    </section>
    <section class="Infos">
      <container>
        <row center-xs>
          <column xs="11">
            Forgue Romane © 2017 - Site créé avec <a href="https://nuxtjs.org" target="_blank">NuxtJS</a>
          </column>
        </row>
      </container>
    </section>
  </footer>
</template>

<style lang="scss">
.Footer
{
  text-align: center;
  padding: 50px 0;
  background-color: #fff;
  &__Title
  {
    font-weight: 300;
    font-size: 36px;
    padding-bottom: 30px;
  }
  &__Form
  {
    margin: 0 -10px;
  }
  &__Half
  {
    width: 50%;
    display: inline-block;
    padding: 10px;
  }
  &__Full
  {
    width: 100%;
    padding: 10px;
  }
  &__Field
  {
    width: 100%;
    font-weight: 300;
    font-size: 16px;
    border: 2px solid #ddd;
    background-color: #fff;
    border-radius: 5px;
    padding: 12px;
    appearance:none;
    &:focus
    {
      outline: 0;
      border-color: #aaa;
    }
  }
  &__Submit
  {
    width: 250px;
    cursor: pointer;
    font-weight: 300;
    font-size: 15px;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.5px;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 14px 0;
    background-color: #333;
    margin-top: 10px;
  }
}
.Infos
{
  color: #fff;
  font-weight: 300;
  padding: 15px 0;
  text-align: center;
  background-color: #111;
  letter-spacing: 1px;
  a
  {
    color: #ddd;
    text-decoration: none;
    &:hover
    {
      color: #fff;
      text-decoration: underline;
    }
  }
}
</style>
