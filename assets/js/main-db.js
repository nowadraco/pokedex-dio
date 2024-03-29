const pokemonDetalhes = document.getElementById('pokemonDetalhes');
const storedId = localStorage.getItem("pokemonId");
console.log("Id armazenado: ", storedId);
var id = storedId
const urlDetalhes = `https://pokeapi.co/api/v2/pokemon/${id}/`


fetch(urlDetalhes)
    .then(response => response.json())
    .then(data => {
        pokemon = data;
        pokemonDetalhes.innerHTML = convertPokemonDetalhes(pokemon);
    });

function convertPokemonDetalhes(pokemon) {
    return `
      <section class="pokemondb ${pokemon.types[0].type.name}">
    <section class="nomenuberdb">
      <span class="namedb">${pokemon.name}</span>
      <span class="numberdb">#${pokemon.id}</span>
    </section>
    <ol class="typesdb">
      ${pokemon.types.map(type => `<li class="typedb ${type.type.name}">${type.type.name}</li>`).join('')}
    </ol>
    <section class="imagem">
      <div class="imgdb">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
      </div>
    </section>
  </section>
  <section class="sobre">
    <h3>Sobre</h3>
    <ol>
      <li>Especie: ${pokemon.species.name}</li>
      <li>Altura: ${pokemon.height/10} m</li>
      <li>Peso: ${pokemon.weight/10} kg</li>
      <li>Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</li>

    </ol>
  </section>
  </section>
  <section class="statusbase">
    <h3>Status Base</h3>
    <ol>
      <li>HP: ${pokemon.stats[0].base_stat}</li>
      <li>Ataque: ${pokemon.stats[1].base_stat}</li>
      <li>Defesa: ${pokemon.stats[2].base_stat}</li>
      <li>Especial Ataque: ${pokemon.stats[3].base_stat}</li>
      <li>Especial Defesa: ${pokemon.stats[4].base_stat}</li>
      <li>Velocidade: ${pokemon.stats[5].base_stat}</li>
      <li>Total: ${pokemon.stats.reduce((acc, curr) => acc + curr.base_stat, 0)}</li>
    </ol>
  </section>
  <section class="moves">
    <h3>Movimentos</h3>
    <ol class="movesl">
      ${pokemon.moves.slice().map(move => `<li>${move.move.name}</li>`).join('')}
    </ol>
  </section>
    `
};