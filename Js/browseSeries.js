var xhr = new XMLHttpRequest();
var httpReq = new XMLHttpRequest();
var apikey = '15480561167064b2207a0c023a695bea';

window.addEventListener("load", function () {
    
    xhr.open("GET", `https://api.themoviedb.org/3/tv/popular?api_key=15480561167064b2207a0c023a695bea&language=en-US&page=1`, true);
    xhr.onreadystatechange = loadDoc;
    xhr.send();

    /* var card = document.getElementById("card1");
    card.addEventListener("click", addFilmsReproduced); */

});

function loadDoc() {
    
    if ( xhr.readyState === 4 && xhr.status === 200 ) {
        var respuesta = JSON.parse( xhr.responseText );
        console.log(respuesta.results);
        makeCard( respuesta.results );
        //localStorage.setItem("provincia",xhr.responseText);
    }
    else {
        console.log( "ERROR " + xhr.status );
    }
    
}

function makeCard(movies) {
    
    let container = document.getElementById("recommended-films");
    let contadorSlide = 0;
    let index = 0;
    let intervalo = 5;

        
    while (contadorSlide < 3) {
        
        let carouselItem = document.createElement("div");
        let cardGroup = document.createElement("div");

        if (contadorSlide == 0) {

            carouselItem.setAttribute("class", "carousel-item active");
            
        }
        else {
        
            carouselItem.setAttribute("class", "carousel-item");
            
        }
        
        cardGroup.setAttribute("class", "card-group mb-3");

        container.appendChild(carouselItem);
        carouselItem.appendChild(cardGroup);

       
        for (index; index < intervalo; index++) {
            
            const element = movies[index];
            
            let card = document.createElement("div");
            let cardImg = document.createElement("img");
            
            console.log(element.id);
            card.setAttribute("class", "card w-20 bg-dark mr-1");
            card.setAttribute("id", element.id);
            cardImg.setAttribute("data-toggle", "modal");
            cardImg.setAttribute("data-target", "#exampleModal");
            cardImg.setAttribute("class", "card-img img-fluid");
            cardImg.setAttribute("src", "https://image.tmdb.org/t/p/w500" + element.backdrop_path);
                
            cardGroup.appendChild(card);
            card.appendChild(cardImg);

            let cardId = document.getElementById(element.id);
            // cardId.addEventListener("click", addFilmsReproduced);

           
        }

        index = intervalo;
        intervalo += 5;
        contadorSlide++;
        
    }
    
}