
/**
* Set book data to state of store
* @method SET_BOOKS
* @param  {Array} state vuex state object
* @param  {Array} payload array of book objects
*/
const SET_BOOKS = (state, payload) => {
  state.books = payload
}

/**
 * Set houses data to state of store
 * @method SET_HOUSES
 * @param  {Array} state vuex state object
 * @param  {Array} payload array of houses objects
 */
const SET_HOUSES = (state, payload) => {
  state.houses = payload
}

/**
 * Set characters data to state of store
 * @method SET_CHARACTERS
 * @param  {Array} state vuex state object
 * @param  {Array} payload array of characters objects
 */
const SET_CHARACTERS = (state, payload) => {
  state.characters = payload
}

export {
  SET_BOOKS,
  SET_HOUSES,
  SET_CHARACTERS
}
