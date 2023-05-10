//Locación 1
function getWeather1(done){

    const results = fetch("http://api.weatherapi.com/v1/current.json?key=d47cf6be03fe49e08eb24437231005&q=Santiago&aqi=yes");

    results
        .then(response => response.json())
        .then(data => {done(data)});
}

getWeather1(data => {
    data.results.forEach(locacion => {
        
        const div1 = document.createRange().createContextualFragment(
            `<div class="container col-10">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-2 mt-2">
                    <div class="col-4"> 
                        <div class="card shadow-sm">
                            <img src="${locacion.current.condition.icon}" class="card-img-top" width="100%" height="225" alt="Imagen">
                            <div class="card-body">
                            <p class="card-text"><strong>Ciudad: </strong>${locacion.location.name}</p>
                            <p class="card-text"><strong>Región: </strong>${locacion.location.region}</p>
                            <p class="card-text"><strong>País: </strong>${locacion.location.country}</p>
                            <p class="card-text"><strong>Temperatura: </strong>${locacion.current.temp_c}</p>
                            <p class="card-text"><strong>Estado: </strong>${locacion.current.condition.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
  
        );

        const main = document.querySelector("#divRes1");

        main.append(div1);
    });
});

//Locación 2
function getWeather2(done){

    const results = fetch("http://api.weatherapi.com/v1/current.json?key=d47cf6be03fe49e08eb24437231005&q=Arica&aqi=yes");

    results
        .then(response => response.json())
        .then(data => {done(data)});
}

getWeather1(data => {
    data.results.forEach(locacion => {
        
        const div2 = document.createRange().createContextualFragment(
            `<div class="container col-10">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-2 mt-2">
                    <div class="col-4"> 
                        <div class="card shadow-sm">
                            <img src="${locacion.current.condition.icon}" class="card-img-top" width="100%" height="225" alt="Imagen">
                            <div class="card-body">
                            <p class="card-text"><strong>Ciudad: </strong>${locacion.location.name}</p>
                            <p class="card-text"><strong>Región: </strong>${locacion.location.region}</p>
                            <p class="card-text"><strong>País: </strong>${locacion.location.country}</p>
                            <p class="card-text"><strong>Temperatura: </strong>${locacion.current.temp_c}</p>
                            <p class="card-text"><strong>Estado: </strong>${locacion.current.condition.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
  
        );

        const main = document.querySelector("#divRes2");

        main.append(div2);
    });
});

//Locación 3
function getWeather3(done){

    const results = fetch("http://api.weatherapi.com/v1/current.json?key=d47cf6be03fe49e08eb24437231005&q=Punta arenas&aqi=yes");

    results
        .then(response => response.json())
        .then(data => {done(data)});
}

getWeather1(data => {
    data.results.forEach(locacion => {
        
        const div3 = document.createRange().createContextualFragment(
            `<div class="container col-10">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-2 mt-2">
                    <div class="col-4"> 
                        <div class="card shadow-sm">
                            <img src="${locacion.current.condition.icon}" class="card-img-top" width="100%" height="225" alt="Imagen">
                            <div class="card-body">
                            <p class="card-text"><strong>Ciudad: </strong>${locacion.location.name}</p>
                            <p class="card-text"><strong>Región: </strong>${locacion.location.region}</p>
                            <p class="card-text"><strong>País: </strong>${locacion.location.country}</p>
                            <p class="card-text"><strong>Temperatura: </strong>${locacion.current.temp_c}</p>
                            <p class="card-text"><strong>Estado: </strong>${locacion.current.condition.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
  
        );

        const main = document.querySelector("#divRes3");

        main.append(div3);
    });
});