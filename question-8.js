const Names = []
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(function (result) {
    console.log('Result', result)
    for (var i = 0; i < result.length; i++) {
      Names.push(result[i].name)
    }
    console.log( Names)
  })
  .catch(error => console.log('error', error));