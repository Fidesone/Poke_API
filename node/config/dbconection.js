import mysql from 'mysql'

const conn = mysql.createConnection({
    host: "127.0.0.1", 
    user: "user1", 
    password: "pass", 
    database: "pokedex",
    port: 3308
});

conn.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conexion establecida...');
    }
});

export {conn}



