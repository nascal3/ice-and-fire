<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="characters"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Characters Table</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.name="{ item }">
        <span class="link-item" @click="getCharacterInfo(item)">
          <router-link :to="{ name: 'CharacterInfo', params: { id: id(item.url) }}">
            {{ item.name ? item.name: 'No name found!' }}
          </router-link>
        </span>
      </template>
      <template v-slot:item.culture="{ item }">
         <span class="link-item" @click="getCharacterInfo(item)">
            <router-link :to="{ name: 'CharacterInfo', params: { id: id(item.url) }}">
              {{ item.culture ? item.culture: 'No culture present!' }}
            </router-link>
         </span>
      </template>
    </v-data-table>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Characters',
  data: () => ({
    headers: [
      { text: 'Character Name', value: 'name' },
      { text: 'Culture', value: 'culture' }
    ]
  }),
  computed: {
    ...mapGetters({
      characters: 'characters'
    })
  },
  methods: {
    ...mapActions({
      fetchCharacters: 'fetchCharacters'
    }),
    id (url) {
      const id = url.split('/').length - 1
      return url.split('/')[id]
    }
  },
  created () {
    this.fetchCharacters()
  }
}
</script>

<style lang="scss" scoped>
  .link-item {
    a {
      text-decoration: none;
      color: black;
    }
  }
</style>
