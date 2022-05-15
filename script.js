const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#F4E7DA",
  rock: "#D5D5D4",
  fairy: "#FCEAFF",
  poison: "#E0BDE7",
  bug: "#F8D5A3",
  dragon: "#97B3E6",
  psychic: "#EAEDA1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const pokedex = document.getElementById("pokedex");
const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_shiny"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
      weight: result.weight / 10 + " kg",
      height: result.height / 10 + " m",
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
        <li class="card" id="card" style="">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id} <br> ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <p class="card-subtitle">Height: ${pokeman.height}</p>
            <p class="card-subtitle">Weight: ${pokeman.weight}</p>

        </li>
    `
    )

    .join("");

  pokedex.innerHTML = pokemonHTMLString;

  console.log(pokeman.type);
};

fetchPokemon();
