var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);


$.ajax({
    type: 'GET',
    url:'https://openweathermap.org/forecast5',
    success: function(response) {
    
      var weather= response.weather;
      $('div.append-to-me').append(weather);
      
    },
    error: function(error) {
        console.log('not implemented');
    }
  });
