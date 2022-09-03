import axios from 'axios'

Promise.all([
  axios.get('https://api.github.com/users/rsgabriel01'),
  axios.get('https://api.github.com/users/rsgabriel01/repos')
])
  .then(response => {
    console.log(response[0].data.login)
    console.log(response[1].data.length)
  })
  .catch(error => console.log(error.message))
