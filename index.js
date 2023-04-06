
async function correrPrograma() {
    const data = await fetch(
        "http://www.omdbapi.com/?t=harry+potter&apikey=221ba3f5"
    )
    const jsonData = await data.json()

    const Peliculas = jsonData

    console.log(Peliculas);
}

correrPrograma();

