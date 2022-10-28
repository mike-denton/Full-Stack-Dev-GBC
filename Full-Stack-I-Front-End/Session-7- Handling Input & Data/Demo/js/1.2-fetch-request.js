


window.onload= () => {

	console.log('loaded');

  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  // important to return the json response
  fetch(url, { 
      
      method: "GET",  // POST, PUT, DELETE
      headers: { "Content-Type": "application/json" }
    
    })
    .then((response) => { 
      console.log(response);
      return response.json(); // =====> unpack the json data promise
    })
    .then(function (data) {
      console.log(data);
    })
  .catch(err => console.log(err))
}


