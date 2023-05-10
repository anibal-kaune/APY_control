function getUsers(done){

    const results = fetch("https://randomuser.me/api");

    results
        .then(response => response.json())
        .then(data => {done(data)});

}

getUsers(data => {
    data.results.forEach(usuario => {
        
        const article = document.createRange().createContextualFragment(
        `<article>
          <div class="container col-8">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-2 mt-2">
              <div class="col-4"> 
                <div class="card shadow-sm">
                    <img src="${usuario.picture.large}" class="card-img-top" width="100%" height="225" alt="Imagen">
                    <div class="card-body">
                      <p class="card-text"><strong>Nombre: </strong>${usuario.name.first} ${usuario.name.last}</p>
                      <p class="card-text"><strong>ID: </strong>${usuario.id.value}</p>
                      <p class="card-text"><strong>Email: </strong>${usuario.email}</p>
                      <p class="card-text"><strong>Teléfono: </strong>${usuario.cell}</p>
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