const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const database = document.getElementById('database')

const maxRecords = 151
const limit = 8
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <a  href="data-base.html">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        </a>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

function convertPokemonTodatabase(pokemondb) {
    return `
        <a  href="data-base.html">
            <li class="pokemon ${pokemondb.type}">
                <span class="number">#${pokemondb.number}</span>
                <span class="name">${pokemondb.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemondb.photo}"
                        alt="${pokemondb.name}">
                </div>
            </li>
        </a>
    `
}

function loadPokemondb() {
    pokeApi.getPokemons().then((pokemonsdb = []) => {
        const newHtml = pokemonsdb.map(convertPokemonTodatabase).join('')
        database.innerHTML += newHtml
    })
}