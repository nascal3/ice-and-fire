<template>
  <v-card class="mx-auto" max-width="344">
    <h3>Name: {{ characterInfo.name ? characterInfo.name: 'Shame, shame, no name!' }}</h3>
    <v-row>
      <v-col cols="12" sm="7">
        <div>Aliases: {{aliases}}</div>
        <div>Titles: {{titles}}</div>
        <div>Gender: {{characterInfo.gender}}</div>
        <div>Spouse: {{characterInfo.spouse}}</div>
        <div>Played by: {{playedBy}}</div>
        <div>TV series: {{series}}</div>
      </v-col>
      <v-col cols="12" sm="5">
        <div>Born: {{characterInfo.born}}</div>
        <div>Father: {{characterInfo.father}}</div>
        <div>Mother: {{characterInfo.mother}}</div>
        <div>Culture: {{characterInfo.born}}</div>
        <div>Died: {{characterInfo.died}}</div>
      </v-col>

    </v-row>

  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Info',
  computed: {
    ...mapGetters({
      characterInfo: 'characterInfo'
    }),
    aliases () {
      let aliasNames = ''
      this.characterInfo.aliases.forEach(alias => {
        aliasNames += alias
      })
      return aliasNames
    },
    titles () {
      let titles = ''
      this.characterInfo.titles.forEach(title => {
        titles += ` ${title}`
      })
      return titles
    },
    playedBy () {
      let playedBy = ''
      this.characterInfo.playedBy.forEach(actor => {
        playedBy += ` ${actor}`
      })
      return playedBy
    },
    series () {
      let serials = ''
      this.characterInfo.tvSeries.forEach(series => {
        serials += ` ${series}`
      })
      return serials
    }
  },
  methods: {
    ...mapActions({
      fetchCharacterInfo: 'fetchCharacterInfo'
    }),
    getCharacterInfo () {
      const id = this.$route.params.id
      this.fetchCharacterInfo(id)
    }
  },
  created () {
    this.getCharacterInfo()
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    font-weight: 400;
    text-align: center;
  }
  .v-card {
    padding: 10px;
  }
</style>
