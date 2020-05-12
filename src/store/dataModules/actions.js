import axios from 'axios'
const baseUrl = 'https://anapioficeandfire.com'

/**
 * fetch books from API endpoint
 * @method fetchBooks
 * @param  {Object} commit vuex mutations
 */
const fetchBooks = async ({ commit }) => {
  const url = `${baseUrl}/api/books`
  try {
    const values = await axios.get(url)
    commit('SET_BOOKS', values.data)
  } catch (err) {
    throw new Error(err.message)
  }
}

/**
 * fetch houses from API endpoint
 * @method fetchHouses
 * @param  {Object} commit vuex mutations
 */
const fetchHouses = async ({ commit }) => {
  const url = `${baseUrl}/api/houses`
  try {
    const values = await axios.get(url)
    commit('SET_HOUSES', values.data)
  } catch (err) {
    throw new Error(err.message)
  }
}

/**
 * fetch Characters from API endpoint
 * @method fetchCharacters
 *  @param  {Object} commit vuex mutations
 */
const fetchCharacters = async ({ commit }) => {
  const url = `${baseUrl}/api/characters`
  try {
    const values = await axios.get(url)
    commit('SET_CHARACTERS', values.data)
  } catch (err) {
    throw new Error(err.message)
  }
}

export {
  fetchBooks,
  fetchHouses,
  fetchCharacters
}
