var latitude = -33.344
var longitude = -53.031
const beachFlagImg = document.createElement("img");

  beachFlagImg.src ="iss.png";
  beachFlagImg.width=80
  beachFlagImg.height=80

/*Quando pressiona o botão */
$(function () {
    $("#get_button").click(function () {
        
        /*Quando clica pega os dados da iss */
        fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('API request failed');
        }
        })
        .then(data => {
            // faça o que quiser com o response aqui
            console.log('DADOS DA API', data);
            latitude = data.latitude;
            console.log('DADOS DA lati', latitude);
            longitude = data.longitude;
            console.log('DADOS DA longi', longitude);
            initMap(latitude, longitude);
            
        })
       
        .catch(error => {
        // crie o handler de error aqui
        console.log('ERRO NA CHAMADA', error);
        });


        
    })
    
})


// Initialize and add the map
let map;

async function initMap(lati,longi) {
  // The location of Uluru
  const position = { lat: lati, lng: longi };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 2,
    center: position,
    mapId: "DEMO_MAP_ID",
  });
  
  
  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    content: beachFlagImg,
    title: "Uluru",
  });
}

initMap(latitude, longitude);
