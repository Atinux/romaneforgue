<template>
  <footer id="contact">
    <section class="Footer">
      <container>
        <row center-xs>
          <column xs="11">
            <h2 class="Footer__Title">Me Contacter</h2>
            <div class="Footer__Success" v-if="status === 2">
              <div class="Footer__Success__Close" @click="status = 0">X</div>
              Message envoyé avec succès.
            </div>
            <form class="Footer__Form">
              <div class="Footer__Half">
                <input class="Footer__Field" type="text" name="title" placeholder="Titre" v-model="form.title"/>
              </div>
              <div class="Footer__Half">
                <input class="Footer__Field" type="email" name="email" placeholder="Email" v-model="form.email"/>
              </div>
              <div class="Footer__Full">
                <textarea class="Footer__Field" name="message" placeholder="Message" rows="6" v-model="form.message"></textarea>
              </div>
              <button class="Footer__Submit" type="button" v-if="status === 1">Veuillez patienter</button>
              <button class="Footer__Submit" type="button" v-else @click="send">Envoyer</button>
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

<script>
import axios from 'axios'

export default {
  data () {
    return {
      status: 0,
      form: { title: '', email: '', message: '' }
    }
  },
  methods: {
    send () {
      if (this.form.title.length && this.form.email.length && this.form.message.length) {
        this.status = 1
        axios.post('http://formspree.io/romane.forgue@hotmail.fr', this.form).then((res) => {
          this.status = 2
          this.form.title = ''
          this.form.email = ''
          this.form.message = ''
        })
      }
    }
  }
}
</script>

<style lang="scss">
.Footer
{
  text-align: center;
  padding: 50px 0;
  background-color: #fff;
  &__Success
  {
    color: #fff;
    background-color: green;
    border-radius: 5px;
    padding: 20px 15px;
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 18px;
    &__Close
    {
      cursor: pointer;
      color: #fff;
      border: 1px solid #fff;
      width: 24px;
      height: 24px;
      float: right;
      border-radius: 50%;
      text-align: center;
      font-weight: 300;
      line-height: 22px;
      background-color: transparent;
      &:hover
      {
        color: green;
        background-color: #fff;
      }
    }
  }
  &__Title
  {
    font-weight: 300;
    font-size: 40px;
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
