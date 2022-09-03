import axios from 'axios'

axios
  .get('https://api.github.com/users/rsgabriel01')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data[0].name))
  .catch(error => console.error(error))
