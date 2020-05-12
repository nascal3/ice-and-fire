<template>
  <v-card class="mx-auto">
    <v-data-table
      :headers="headers"
      :items="houses"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Houses Table</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="house-info">
            <houses-info :houseInfo="item" />
          </div>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import HousesInfo from '@/components/houses/housesInfo'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Houses',
  components: {
    HousesInfo
  },
  data: () => ({
    expanded: [],
    singleExpand: false,
    headers: [
      { text: 'House Name', value: 'name' },
      { text: 'Region', value: 'region' }
    ]
  }),
  computed: {
    ...mapGetters({
      houses: 'houses'
    })
  },
  methods: {
    ...mapActions({
      fetchHouses: 'fetchHouses'
    })
  },
  created () {
    this.fetchHouses()
  }
}
</script>

<style scoped>

</style>
