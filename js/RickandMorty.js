function getCharacters(done){

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {done(data)});

}

getCharacters(data => {
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(
        `<article>
          <div class="container col-10">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-2 mt-2">
              <div class="col-4"> 
                <div class="card shadow-sm">
                    <img src="${personaje.image}" class="card-img-top" width="100%" height="225" alt="Imagen">
                    <div class="card-body">
                      <p class="card-text"><strong>Nombre: </strong>${personaje.name}</p>
                      <p class="card-text"><strong>Estado: </strong>${personaje.status}</p>
                      <p class="card-text"><strong>Especie: </strong>${personaje.species}</p>
                      <p class="card-text"><strong>Genero: </strong>${personaje.gender}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </article>`
  
        );

        const main = document.querySelector("main");

        main.append(article);
    });
});