var latitude
var longitude
var endereco


$(function () {
    $("#end_button").click(function () {
        
    })
    
})

/*Quando pressiona o botão */
$(function () {
    $("#get_button").click(function () {
        let input_data = {
            "endereco": $("#text_end").val(),
        }
        
        endereco = input_data.endereco
       /*Quando digita a cidade e localiza */
        fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDgr6KlaQjBPsjpFuqLLqcTQZS_k5waMJs&sensor=false&address='+endereco)
        .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('API request failed');
        }
        })
        .then(data => {
        // faça o que quiser com o response aqui
        console.log('DADOS DA API', data.explanation);
        
        $(document).ready(function () {
           
            $("#text_latitude").html("Latitude: "+data.results[0].geometry.location.lat)
            $("#text_longitude").html("Longitude: "+data.results[0].geometry.location.lng)
            
           latitude = data.results[0].geometry.location.lat;
           longitude = data.results[0].geometry.location.lng
           
            $("#iframe").attr('src', "https://virtualsky.lco.global/embed/index.html?longitude="+longitude+"&latitude="+latitude+"&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false");
       

        })
        })
        .catch(error => {
        // crie o handler de error aqui
        console.log('ERRO NA CHAMADA', error);
        });


        
    })
    
})


    
