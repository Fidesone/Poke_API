import { getAllPokemons, getMuestraHabilidades } from './getPokemon.js';
import { prevPage, nextPage } from './pages.js';
const POKEMONS_PER_PAGE = 20;
let currentPage = 1;
let totalPages = 0;
let listaPokemonvisible = false;
let listaPokemonhabilidades = false;

document.addEventListener('DOMContentLoaded', async function(event) {
  const container = document.getElementById('boton-container');
  const button = document.createElement('button');
  button.innerText = 'Ver Pokemon';
  container.appendChild(button);

  button.addEventListener('click', async function() {
    try {
      const pokemons = await getAllPokemons();

      // Calculamos el número total de páginas en base al número de Pokémon
      totalPages = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);

      // Mostramos solo los Pokémon de la página actual
      const start = (currentPage - 1) * POKEMONS_PER_PAGE;
      const end = start + POKEMONS_PER_PAGE;
      const pokemonPage = pokemons.slice(start, end);

      const pokemonListEl = document.getElementById('pokemon-list');
      pokemonListEl.innerHTML = ''; // limpiamos el contenido previo

    
      for (const pokemon of pokemonPage) {
        const pokemonLiEl = document.createElement('li');
        const pokemonBtnEl = document.createElement('button');
        pokemonBtnEl.textContent = pokemon.name;
        pokemonBtnEl.setAttribute('data-url', pokemon.url);

        pokemonBtnEl.addEventListener('click', async function() {
          try {
            if (this.nextElementSibling) {
              // si ya existe el elemento con las habilidades, se borra
              this.nextElementSibling.remove();
              return;
            }

            const habilidades = await getMuestraHabilidades(this.getAttribute('data-url'));
            const habilidadesListEl = document.createElement('ul');
            habilidades.forEach(habilidadName => {
              const habilidadEl = document.createElement('li');
              habilidadEl.textContent = habilidadName;
              habilidadesListEl.appendChild(habilidadEl);
            });
            const pokemonDivEl = document.createElement('div');
            pokemonDivEl.textContent = pokemon.name;
            pokemonDivEl.appendChild(habilidadesListEl);
            pokemonLiEl.appendChild(pokemonDivEl);
          } catch (error) {
            console.error(error);
          }
        });

        const url = pokemon.url;
        const response = await fetch(url);
        if (response.ok) {
          const pokemonData = await response.json();
          if (pokemonData.sprites && pokemonData.sprites.front_default) {
            const spriteUrl = pokemonData.sprites.front_default;
            const spriteEl = document.createElement('img');
            spriteEl.src = spriteUrl;
            pokemonBtnEl.appendChild(spriteEl);
          }
        }

        pokemonLiEl.appendChild(pokemonBtnEl);
        pokemonListEl.appendChild(pokemonLiEl);
      }

      //Se realiza una función para ocultar/mostrar los pokemon
      muestraPokemon();
      muestraHabilidadesPokemon();
    } catch (error) {
      console.error(error);
    }
  });
});

function muestraPokemon() {
  const lista = document.getElementById("pokemon-list");
  if (listaPokemonvisible) {
    lista.style.display = "none";
    listaPokemonvisible = false;
  } else {
    lista.style.display = "block";
    listaPokemonvisible = true;
  }
}

function muestraHabilidadesPokemon() {
  const lista = habilidadesListEl;
  if (listaPokemonhabilidades) {
    lista.style.display = "none";
    listaPokemonhabilidades = false;
  } else {
    lista.style.display = "block";
    listaPokemonhabilidades = true;
  }
}

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', nextPage);

const prevButton = document.getElementById('prev-button');
prevButton.addEventListener('click', prevPage);
