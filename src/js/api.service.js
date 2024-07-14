const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

 function fetchPokemon(poKemonId) {
 
    return fetch(`${BASE_URL}/poKemon/${poKemonId}`).then(response=>{
        return response.json
    })
}
export default {fetchPokemon}