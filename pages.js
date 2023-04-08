

var numPag = document.getElementById('selectPage').value;
var root = document.getElementById('root')





async function verPaginas(numPag){
    

    const root = await fetch(`http://www.omdbapi.com/?s=none&page=${numPag}&apikey=221ba3f5`)
    
    
    let rootjson = await root.json()
    
    let peliculasSearch = rootjson.Search

    root.innerHTML=''
    for (let i = 0; i < peliculasSearch.length; i++) {
        const pelicula = peliculasSearch[i];
        
        
        const titulo = pelicula.Title
        const año = pelicula.Year
        const tipo = pelicula.Type
        const portada = pelicula.Poster
        
        


        const peliculaHTMl = `
            <div class="card" style="width: 18rem;">
                <img src="${portada}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${titulo}</h5>
                    <p class="card-text">${año}</p>
                    <p class="card-text">${tipo}</p>
                    <a href="#" class="btn btn-primary">More</a>
                </div>
            </div>
            `;
        

        
        
        root.innerHTML += peliculaHTMl;
    }
    



    console.log(peliculasSearch);

}

async function paginaAnterior() {
    const numPage = numPag-1;
    console.log(numPage);
}


async function paginaSiguiente(){
    const numPage = numPag+1;
    console.log(numPage);
}


console.log(numPag);
