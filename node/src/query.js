import {conn} from '../config/dbconection.js'

function selectPokemon() { 
conn.query("SELECT * FROM POKEMON", function (err, result, fields) {
    if (err) throw err;
        console.log(result);
        console.log('sale esto');
        conn.end();
        console.log('conexion cerrada');
    });
}

//Corregir query
function insertPokemon() { 
    let  variables = [
        'Venusaur', 'Planta',
        'Charmander', 'Fuego',
        'Charmeleon', 'Fuego', 
        'Charizard', 'Fuego',
        'Squirtle', 'Agua',
        'Wartortle', 'Agua',
        'Blastoise', 'Agua'
    ]
    conn.query('INSERT INTO POKEMON (nombre, tipo) VALUES (?);', [variables] , function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.log('sale esto'+ $rows);
        //conn.end();
        //console.log('conexion cerrada');
    });
}

export {insertPokemon}
export {selectPokemon}
