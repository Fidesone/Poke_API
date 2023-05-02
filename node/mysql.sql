CREATE DATABASE POKEDEX;


USE POKEDEX;

create table pokemon(
    id_pokemon int not null primary key AUTO_INCREMENT, 
    nombre varchar (100), 
    tipo varchar (100) 
)
