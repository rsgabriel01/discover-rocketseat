async function start() {
  const url = 'https://api.github.com/users/rsgabriel01'
  const user = await fetch(url).then(response => response.json())
  const userRepos = await fetch(user.repos_url).then(response.json())

  console.log(userRepos)
}

start().catch(err => console.log(err))
