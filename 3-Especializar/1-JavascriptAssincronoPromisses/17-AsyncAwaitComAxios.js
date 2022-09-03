import axios from 'axios'

async function fetchRepos() {
  try {
    const user = await axios.get('https://api.github.com/users/rsgabriel01')
    const repos = await axios.get(user.data.repos_url)

    console.log(repos.data[0].name)
  } catch (error) {
    console.log(error)
  }
}

fetchRepos()
