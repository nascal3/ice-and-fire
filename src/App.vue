<template>
  <v-app>
    <v-app-bar
      app
      color="default"
    >
      <div class="d-flex align-center">
        <div class="web-title red--text">
          Ice & fire
        </div>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container ma-0 pa-0 fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  $color-pack: false;
  @import '~vuetify/src/styles/main.sass';
  .web-title {
    font-size: 40px;
    font-weight: 300;
    text-transform: capitalize;
  }
</style>
