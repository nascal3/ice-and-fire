
/**
* Retrieve the books fetched from API
* @method books
* @param  {Object} state vuex state object
* @return {Array} Contains an array with books data
*/
const books = (state) => state.books

/**
 * Retrieve the houses data fetched from API
 * @method houses
 * @param  {Object} state vuex state object
 * @return {Array} Contains an array with houses data
 */
const houses = (state) => state.houses

/**
 * Retrieve the characters fetched from API
 * @method characters
 * @param  {Object} state vuex state object
 * @return {Array} Contains an array with characters data
 */
const characters = (state) => state.characters

export {
  books,
  characters,
  houses
}
