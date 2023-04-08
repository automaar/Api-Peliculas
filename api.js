
var root = document.getElementById('root')

export async function buscarPorNombre(nombrePelicula){
    const data = await fetch(`http://www.omdbapi.com/?s=${nombrePelicula}&apikey=221ba3f5`);

    const caracteristicas = await data.json();

    const titulo = caracteristicas.Title;
    const imagen = caracteristicas.Poster;
    const año = caracteristicas.Year;

    const peliHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${año}</p>
                <a href="#" class="btn btn-primary">More</a>
            </div>
        </div>
        `;

    root.innerHTML += peliHTML;
}


