<template>
  <container>
    <row center-xs>
      <column xs="11">
        <section class="Intro">
          <h2 class="Intro__Title">
            Créative et minutieuse dans mon travail, je suis autodidacte et <br/>
            passionnée dans tout ce que j’entreprends.
          </h2>
          <hr>
          <p class="Intro__Description">
            Après une licence en Langues Étrangères Appliquées (Anglais et Espagnol) je me suis reconvertie vers le <b>Webdesign</b><br/>
            depuis maintenant presque <b>2 ans</b>.<br/>
            Actuellement étudiante en année préparatoire au <b>master en Webdesign à Digital Campus</b> (Bordeaux),
            je cherche un <b>stage</b> dans ce domaine à partir du <b>mois d'avril</b> pour une durée de <b>3 à 6 mois à Bordeaux.</b><br/>
            Si mon profil vous intéresse, je vous invite à <b>télécharger mon CV</b> ainsi qu’à découvrir <b>mes créations</b>.
          </p>
        </section>
      </column>
    </row>
  </container>
</template>

<style lang="scss" scoped>
.Intro
{
  margin: 0;
  margin-top: -150px;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
  padding: 20px;
  &__Title
  {
    font-size: 30px;
    line-height: 45px;
    font-weight: 300;
    min-height: 130px;
    padding: 10px 15px;
    padding-bottom: 30px;
  }
  &__Description
  {
    font-size: 18px;
    line-height: 28px;
    color: #666;
    font-weight: 300;
    padding: 10px 15px;
    padding-top: 30px;
    b
    {
      font-weight: 400;
    }
  }
  hr
  {
    height: 2px;
    margin: 0 50px;
    background-color: #ddd;
    border: none;
  }
}
</style>
