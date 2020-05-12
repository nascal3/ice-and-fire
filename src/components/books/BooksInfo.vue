<template>
  <section>
    <h4>{{bookInfo.name}} information</h4>
    <v-row>
      <v-col cols="12" sm="6">
        <div>Author: {{authors}}</div>
        <div>Country: {{bookInfo.country}}</div>
        <div>Media Type: {{bookInfo.mediaType}}</div>
      </v-col>
      <v-col cols="12" sm="6">
        <div>Number of Pages: {{bookInfo.numberOfPages}}</div>
        <div>Publisher: {{bookInfo.publisher}}</div>
        <div>Released: {{releaseDate}}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <a
          target="_blank"
          :href="bookurl"
          @click.stop
        >
          Read more...
        </a>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'BooksInfo',
  props: {
    bookInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    authors () {
      let authorsNames = ''
      this.bookInfo.authors.forEach(author => {
        authorsNames += author
      })
      return authorsNames
    },
    releaseDate () {
      return format(new Date(this.bookInfo.released), 'MMM do, yyyy')
    },
    bookurl () {
      return this.bookInfo.url
    }
  }
}
</script>

<style scoped>

</style>
