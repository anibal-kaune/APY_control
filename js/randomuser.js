function getUsers1(done){

    const results = fetch("https://randomuser.me/api");

    results
        .then(response => response.json())
        .then(data => {done(data)});

}

getUsers1(data => {
    data.results.forEach(usuario => {
        
        const article = document.createRange().createContextualFragment(
        `<article>
          <div class="container col-8 col-sm-8">
            <div class=""row row-cols-2 row-cols-md-5 g-2 mt-1 justify-content-center"">
              <div class="col"> 
                <div class="card">
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

function getUsers2(done){

  const results = fetch("https://randomuser.me/api");

  results
      .then(response => response.json())
      .then(data => {done(data)});

}

getUsers2(data => {
  data.results.forEach(usuario => {
      
      const article = document.createRange().createContextualFragment(
      `<article>
        <div class="container col-8 col-sm-8">
          <div class=""row row-cols-2 row-cols-md-5 g-2 mt-1 justify-content-center"">
            <div class="col"> 
              <div class="card">
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

function getUsers3(done){

  const results = fetch("https://randomuser.me/api");

  results
      .then(response => response.json())
      .then(data => {done(data)});

}

getUsers3(data => {
  data.results.forEach(usuario => {
      
      const article = document.createRange().createContextualFragment(
      `<article>
        <div class="container col-8 col-sm-8">
          <div class=""row row-cols-2 row-cols-md-5 g-2 mt-1 justify-content-center"">
            <div class="col"> 
              <div class="card">
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

function getUsers4(done){

  const results = fetch("https://randomuser.me/api");

  results
      .then(response => response.json())
      .then(data => {done(data)});

}

getUsers4(data => {
  data.results.forEach(usuario => {
      
      const article = document.createRange().createContextualFragment(
      `<article>
        <div class="container col-8 col-sm-8">
          <div class=""row row-cols-2 row-cols-md-5 g-2 mt-1 justify-content-center"">
            <div class="col"> 
              <div class="card">
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

function getUsers5(done){

  const results = fetch("https://randomuser.me/api");

  results
      .then(response => response.json())
      .then(data => {done(data)});

}

getUsers5(data => {
  data.results.forEach(usuario => {
      
      const article = document.createRange().createContextualFragment(
      `<article>
        <div class="container col-8 col-sm-8">
          <div class=""row row-cols-2 row-cols-md-5 g-2 mt-1 justify-content-center"">
            <div class="col"> 
              <div class="card">
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

function getUsers6(done){

  const results = fetch("https://randomuser.me/api");

  results
      .then(response => response.json())
      .then(data => {done(data)});

}

getUsers6(data => {
  data.results.forEach(usuario => {
      
      const article = document.createRange().createContextualFragment(
      `<article>
        <div class="container col-8 col-sm-8">
          <div class=""row row-cols-2 row-cols-md-5 g-2 mt-1 justify-content-center"">
            <div class="col"> 
              <div class="card">
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