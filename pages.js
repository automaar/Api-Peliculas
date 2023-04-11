var root = document.getElementById('root')
const paginas = document.getElementById('pages')

var num = 1

async function paginaAnterior() {
    if (num == 1){
        return "no se puede ver menos paginas que 0"
    }
    num = num-1;
    const numero  = num;
    console.log('numero pag', numero)
    paginas.innerHTML=`
        <nav aria-label="Page navigation example" id="pages">
            <ul class="pagination justify-content-center">
                <li class="page-item ">
                    <button class="page-link" onclick="paginaAnterior()">Previous</button>
                </li>
                <li class="page-item" id="selectPage"><p  class="page-link">${numero}</p></li>
                    <li class="page-item">
                    <button class="page-link" onclick="paginaSiguiente()">Next</button>
                </li>
            </ul>
        </nav>`;
    verPaginas(numero)
    
}

async function paginaSiguiente(){
    num = num+1;
    const numero =+ num;
    console.log('numero pag', numero)
    paginas.innerHTML=`
        <nav aria-label="Page navigation example" id="pages">
            <ul class="pagination justify-content-center">
                <li class="page-item ">
                    <button class="page-link" onclick="paginaAnterior()">Previous</button>
                </li>
                <li class="page-item" id="selectPage"><p  class="page-link">${numero}</p></li>
                    <li class="page-item">
                    <button class="page-link" onclick="paginaSiguiente()">Next</button>
                </li>
            </ul>
        </nav>`;
    verPaginas(numero)
    
}




async function verPaginas(numero){
    root.innerHTML=`
    <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>`;

    console.log(numero);
    const data = await fetch(`http://www.omdbapi.com/?s=none&page=${numero}&apikey=221ba3f5`)
    console.log(numero);

    let datajson = await data.json()
    
    let peliculasSearch = datajson.Search

    root.innerHTML='';

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
                <img src="${portada}"   height="350px">
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








