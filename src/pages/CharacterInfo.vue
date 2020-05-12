<template>
  <v-row class="characterInfo">
    <v-col cols="12">
      <info/>
    </v-col>
  </v-row>
</template>

<script>
import Info from '@/components/characters/Info'

export default {
  name: 'CharacterInfo',
  components: {
    Info
  }
}
</script>

<style lang="scss" scoped>
  .characterInfo {
    padding: 15px;
  }
</style>
