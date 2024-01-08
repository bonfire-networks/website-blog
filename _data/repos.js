const axios = require('axios');
require('dotenv').config();

async function fetchRepos(page = 1) {
  const response = await axios.get(`https://api.github.com/orgs/bonfire-networks/repos?per_page=100&page=${page}`, {
    headers: {
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.mercy-preview+json'
    }
  });
  return response.data;
}

async function getAllReposWithTopic(topic) {
  let allRepos = [];
  let page = 1;
  let lastFetchLength;

  do {
    const repos = await fetchRepos(page);
    lastFetchLength = repos.length;
    allRepos = allRepos.concat(repos);
    page++;
  } while (lastFetchLength === 100);

  // Filter repositories by topic and sort by stargazers_count
  return allRepos
    .filter(repo => repo.topics && repo.topics.includes(topic))
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}

module.exports = async function() {
  try {
    const topic = 'extension'; 
    return await getAllReposWithTopic(topic);
  } catch (error) {
    console.error('GitHub API error:', error);
    return []; // Return an empty array in case of error
  }
};