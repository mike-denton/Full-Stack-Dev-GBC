const url = 'https://api.github.com/users/shrutikapoor08/repos';

// arrow function => syntax.
fetch(url,  {
    method: "GET",  // POST, PUT, DELETE
    headers: { "Content-Type": "application/json" }
})
  .then(
    response => response.json())
  .then(data => {
    const reposList = data.map(repo => repo.name);
    console.log(reposList);
  })
.catch(err => console.log(err))