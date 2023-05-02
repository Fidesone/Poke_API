//Importo el axios externamente por fallo
import axios from 'https://cdn.skypack.dev/axios'


export async function getAllPokemons() {
  try {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
  const { results } = response.data;
  console.log('getAllPokemons function is running');
  return results;
  } catch (error) {
    console.error(error);
  }
}
export async function getMuestraHabilidades(url) {
  try {
    // Extraer el ID del pokemon de la URL
    const id = url.split('/').slice(-2, -1)[0];
    // Construir la URL correcta para llamar a la API de Pokemon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(apiUrl);
    const abilities = response.data.abilities;
    console.log(getMuestraHabilidades)
    console.log('getMuestraHabilidades function is running');
    const abilityNames = abilities.map(ability => ability.ability.name);
    return abilityNames;
  } catch (error) {
    console.error(error);
  }
}


export async function getPokemonInfo(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
