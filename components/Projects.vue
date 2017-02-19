<template>
  <container>
    <row center-xs>
      <column xs="11">
        <div class="Projects">
          <h2 class="Projects__Title">Mes Réalisations</h2>
          <row between-xs>
            <column md="6">
              <card url="/infographies">
                <img src="~assets/images/mosaic/infographies.jpg" alt="Infographies" slot="image"/>
                Infographies
              </card>
            </column>
            <column md="6">
              <card url="/logos">
                <img src="~assets/images/mosaic/logosdesign.jpg" alt="Logos Design" slot="image"/>
                Logos
              </card>
            </column>
            <column md="6">
              <card url="/retouches-photos">
                <img src="~assets/images/mosaic/retouchesphotos.jpg" alt="Retouches Photos" slot="image"/>
                Retouches Photos
              </card>
            </column>
            <column md="6">
              <card url="/double-exposition">
                <img src="~assets/images/mosaic/doublesexpo.jpg" alt="Double Exposition" slot="image"/>
                Double Exposition
              </card>
            </column>
            <column md="6">
              <card url="/mobiledesign">
                <img src="~assets/images/mosaic/mobiledesign.jpg" alt="Mobile Design" slot="image"/>
                Mobile Design
              </card>
            </column>
            <column md="6">
              <card url="/webdesign">
                <img src="~assets/images/mosaic/dumbblegame.jpg" alt="Jeu Dumble" slot="image"/>
                Webdesign
              </card>
            </column>
          </row>
        </div>
      </column>
    </row>
  </container>
</template>

<script>
import Card from '~components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
.Projects
{
  padding: 70px 0;
  &__Title
  {
    font-weight: 300;
    font-size: 40px;
    padding-bottom: 40px;
  }
}
</style>
