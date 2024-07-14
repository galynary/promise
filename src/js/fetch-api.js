//import pokemonCardTpl from '../templates/pokemon-card.js'
import API from '../js/api.service'
import getRef from "./get_ref"
const ref = getRef()
ref.search.addEventListener("submit", onSearch)

function onSearch (event) {
    event.preventDefault()
const form =event.currentTarget
const searchQuery = form.elements.query.value  // берем значення інпута

API.fetchPokemon(searchQuery).then(renderPocemonCard)
.catch(onFetchError)
.finally(()=> form.reset)
}
function renderPocemonCard(poKemon) {
    const markup =pokemonCardTpl(poKemon)
    ref.cardContainer.innerHTML=markup
}

function onFetchError(error) {
    alert('Ми не знайшли даного пакемона!!!')

}
