<template>
  <project>
    <h1>Mobile Design</h1>
    <row center-xs between-xs>
      <column md="6">
        <div class="video">
          <iframe src="https://www.youtube.com/embed/TIxLEbfom4Q" frameborder="0" allowfullscreen>
          </iframe>
        </div>
      </column>
      <column md="6">
        <p class="special_text">
          Dans le cadre d’un projet réel et au sein d’une équipe intra scolaire, nous avons dû trouver un moyen d’améliorer la performance d’Easy Cash par l’optimisation de son site sous sa version mobile. <br><br>
          Après avoir effectué plusieurs analyses de leur site actuel, nous avons dû proposer une version mobile plus ergonomique afin de dynamiser les ventes. Mon rôle s’est essentiellement tourné sur la partie graphique, j’ai donc réalisé le web design interactif que vous pourrez visionner sur cette vidéo.
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
        { hid: 'description', name: 'description', content: 'Dans le cadre d’un projet réel et au sein d’une équipe intra scolaire, nous avons dû trouver un moyen d’améliorer la performance d’Easy Cash par l’optimisation de son site sous sa version mobile.' }
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
.special_text
{
  padding-top: 30px;
  padding-left: 15px;
}
</style>
