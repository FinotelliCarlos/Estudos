axios.get('https://api.github.com/users/FinotelliCarlos')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });