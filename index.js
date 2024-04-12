


var data;


fetch('https://api.nasa.gov/planetary/apod?api_key=COGdtQeIWk1mbziFVQgpfK3JfP4dBSAlQg8imDGw')
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
    console.log('DADOS DA API', data.date);
    console.log('DADOS DA API', data.title);
    console.log('DADOS DA API', data.url);
    $(document).ready(function () {
      $("#display_date").html("Date: "+data.date)
      $("#title").html("Title: "+ data.title)
      $("#img_url").attr('src', data.url);
      $("#description").html("Description: "+ data.explanation)
    })
  })
  .catch(error => {
    // crie o handler de error aqui
    console.log('ERRO NA CHAMADA', error);
  });
  