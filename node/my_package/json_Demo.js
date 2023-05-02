let infoCurso = {
'Titulo': 'Prueba json', 
'Numero Likes': 50, 
'Temas': [
    'Javascrip',
    'Node'
],
'esPublico': true
}

console.log( typeof infoCurso);
//JSON.stringy --> de tipo OBJETO a tipo STRING
let infoCursoJSON = JSON.stringify(infoCurso);
console.log( typeof infoCursoJSON);
//JSON.parse --> de tipo STRING a OBJETO
let infoCursoObject= JSON.parse(infoCursoJSON);
console.log(typeof infoCursoObject);


