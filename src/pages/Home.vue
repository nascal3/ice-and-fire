<template>
  <v-row class="home">
      <v-col cols="12" md="4">
        <books/>
      </v-col>
      <v-col cols="12" md="4">
        <houses/>
      </v-col>
      <v-col cols="12" md="4">
        <characters/>
      </v-col>
  </v-row>
</template>

<script>
import Books from '@/components/books/Books.vue'
import Houses from '@/components/houses/Houses'
import Characters from '@/components/Characters'

export default {
  name: 'Home',
  components: {
    Books,
    Houses,
    Characters
  }
}
</script>

<style>
  .home {
    padding: 15px;
  }
</style>
