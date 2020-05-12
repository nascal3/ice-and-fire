<template>
  <v-card class="mx-auto">
    <v-data-table
      :headers="headers"
      :items="books"
      :expanded.sync="expanded"
      item-key="isbn"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Books Table</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <div class="book-info">
            <books-info :bookInfo="item" />
          </div>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import BooksInfo from '@/components/books/BooksInfo'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Books',
  components: {
    BooksInfo
  },
  data: () => ({
    expanded: [],
    singleExpand: false,
    headers: [
      { text: 'Book Name', value: 'name' },
      { text: 'ISBN', value: 'isbn' }
    ]
  }),
  computed: {
    ...mapGetters({
      books: 'books'
    })
  },
  methods: {
    ...mapActions({
      fetchBooks: 'fetchBooks'
    })
  },
  created () {
    this.fetchBooks()
  }
}
</script>

<style lang="scss" scoped>

</style>
