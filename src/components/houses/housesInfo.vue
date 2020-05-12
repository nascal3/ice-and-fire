<template>
  <section>
    <h4>{{houseInfo.name}} information</h4>
    <v-row>
      <v-col cols="12" sm="6">
        <div>Founder: {{houseInfo.founder}}</div>
        <div>
          Current Lord:
          <span>
            <a
              target="_blank"
              :href="currentLordUrl"
              @click.stop
            >
              Current lord
            </a>
          </span>
        </div>
        <div>Seats: {{seats}}</div>
        <div>Coat of arms: {{houseInfo.coatOfArms}}</div>
      </v-col>
      <v-col cols="12" sm="6">
        <div>Founded: {{houseInfo.founded}}</div>
        <div>Titles: {{titles}}</div>
        <div>Words: {{houseInfo.words}}</div>
        <div>Died out: {{houseInfo.diedOut}}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <a
          target="_blank"
          :href="houseurl"
          @click.stop
        >
          Read more...
        </a>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'housesInfo',
  props: {
    houseInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    seats () {
      let seatsNames = ''
      this.houseInfo.seats.forEach(seat => {
        seatsNames += ` ${seat}`
      })
      return seatsNames
    },
    titles () {
      let houseTitles = ''
      this.houseInfo.titles.forEach(title => {
        houseTitles += ` ${title}`
      })
      return houseTitles
    },
    currentLordUrl () {
      return this.houseInfo.currentLord
    },
    houseurl () {
      return this.houseInfo.url
    }
  }
}
</script>

<style scoped>

</style>
