const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    // .then((data) => console.log(data.map((repo) => repo.name)))
    .then((data) => data.map((repo) => repo.name))
);
// getRepos('https://api.github.com/orgs/tryber/repos');


module.exports = getRepos;
