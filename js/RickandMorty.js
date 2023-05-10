function getCharacters(done){

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {done(data)});

}

getCharacters(data => {
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(
        `<div class="album py-5 bg-body-tertiary">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <img src="${personaje.image}" class="card-img-top" width="100%" height="225" alt="Imagen">
                    <div class="card-body">
                      <p class="card-text">${personaje.name}</p>
                      <p class="card-text">${personaje.status}</p>
                      <p class="card-text">${personaje.species}</p>
                      <p class="card-text">${personaje.gender}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>`
  
        );

        const main = document.querySelector("main");

        main.append(article);
    });
});