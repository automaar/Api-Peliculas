
var root = document.getElementById('root')
var BPnombre = document.getElementById('buscarPorNombre')
var idPages = document.getElementById('pages')
var mostrar = document.getElementById('mostrarPaginas')

console.log('nombre: ',  BPnombre);

BPnombre.addEventListener("change", async(event)=>{
    root.innerHTML='';
    let nombre = event.target.value;
    await buscarPorNombre(nombre);
})



async function buscarPorNombre(nombre){
    mostrar.innerHTML='';
    idPages.innerHTML='';

    root.innerHTML=`
    <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`;

    
    const data = await fetch(`http://www.omdbapi.com/?s=${nombre}&apikey=221ba3f5`);
    

    let datajson = await data.json()
    
    let peliculasSearch = datajson.Search

    root.innerHTML='';

    console.log(peliculasSearch);
    for (let i = 0; i < peliculasSearch.length; i++) {
        const pelicula = peliculasSearch[i];
        
        
        const titulo = pelicula.Title
        const año = pelicula.Year
        const tipo = pelicula.Type
        const portada = pelicula.Poster
        const id = pelicula.imdbID

        let dataID = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=221ba3f5`);
        let idjson = await dataID.json();
        const genero = idjson.Genre;
        const director = idjson.Director;
        
        const peliculaHTMl = `
            <div class="card" style="width: 14rem;">
                <img src="${portada}"  height="350px">
                <div class="card-body">
                    <h5class="card-title">${titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Director: ${director}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${año}</h6>
                    <p><br>${tipo}</p>
                    <p>${genero}</p>
                    
                </div>
            </div>
            `;
        
        root.innerHTML += peliculaHTMl;
    }
    
}


