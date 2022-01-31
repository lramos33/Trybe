const getRepos = require('./exercise1.js');
const { expect, test, describe } = require('@jest/globals');

test('if the returned array contains certain repos', async() => {
  expect(await getRepos('https://api.github.com/orgs/tryber/repos')).toContain('sd-01-week4-5-project-todo-list');
  expect(await getRepos('https://api.github.com/orgs/tryber/repos')).toContain('sd-01-week4-5-project-meme-generator');
})