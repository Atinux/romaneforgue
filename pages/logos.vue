<template>
  <project>
    <h1>Logos</h1>
    <row center-xs between-xs>
      <column>
        <p>
          Cette page comprend des réalisations personnelles de logos, mais aussi des logos que j’ai pu réaliser pour des concours, des professionnels ou des projets effectués dans le cadre de mes études. Vous trouverez aussi différentes déclinaisons de logos et des simulations sur différents supports. Pour toutes ces réalisations j’ai travaillé sur le logiciel Illustrator.
        </p>
      </column>
      <column>
        <row center-xs between-xs>
          <column md="6">
            <img src="~assets/images/logos/animalheadpack.jpg" alt="Animal">
          </column>
          <column md="6">
            <row between-xs>
              <column>
                <img src="~assets/images/logos/HM.png" alt="HM">
              </column>
              <column>
                <img src="~assets/images/logos/HM8.png" alt="HM 8">
              </column>
            </row>
          </column>
          <column md="4">
            <img src="~assets/images/logos/tchookcloud.png" alt="Tchook Cloud">
          </column>
          <column md="4">
            <img src="~assets/images/logos/tchookservies.png" alt="Tchook Servies">
          </column>
          <column md="4">
            <img src="~assets/images/logos/TchooksProduits.png" alt="Tchook Produits">
          </column>
          <column md="6">
            <img src="~assets/images/logos/ndg.png" alt="NDG">
          </column>
          <column md="6">
            <img src="~assets/images/logos/sweat-NDG.jpg" alt="Sweat NDG">
          </column>
          <column md="6">
            <img src="~assets/images/logos/fykewar.png" alt="Fykewar">
          </column>
          <column md="4">
            <img src="~assets/images/logos/dc.png" alt="DC">
          </column>
          <column md="5">
            <img src="~assets/images/logos/street-billboard.jpg" alt="Billboard">
          </column>
          <column md="7">
            <img src="~assets/images/logos/voiturelogo2.jpg" alt="Voiture Logo">
          </column>
          <column md="7">
            <img src="~assets/images/logos/logoBF.png" alt="Logo BF">
          </column>
          <column md="5">
            <row between-xs>
              <column>
                <img src="~assets/images/logos/voitureBF.png" alt="Voiture BF">
              </column>
              <column md="10" md-offset="1">
                <img src="~assets/images/logos/voitureBF1.png" alt="Voiture BF1">
              </column>
            </row>
          </column>
        </row>
      </column>
    </row>
  </project>
</template>

<script>
import Project from '~components/Project.vue'

export default {
  head () {
    return {
      title: 'Romane Forgue - Logos',
      meta: [
        { hid: 'description', name: 'description', content: 'Cette page comprend des réalisations personnelles de logos, mais aussi des logos que j’ai pu réaliser pour des concours, des professionnels ou des projets effectués dans le cadre de mes études.' }
      ]
    }
  },
  components: {
    Project
  }
}
</script>
