
import express from 'express'
const app = express();
import  path from 'path'
const port = 3000
import getAllPokemons  from './getPokemon.js';

getAllPokemons().then((pokemons) => console.log(pokemons));

  
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname + "/../index.html"))
})


app.listen(port, () => {
    console.log('Running server on port: localhost:', port + '...');
})


