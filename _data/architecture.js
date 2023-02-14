const { Octokit } = require("@octokit/core");
const octokit = new Octokit({auth: process.env.API_TOKEN});


module.exports = async function() {
  return octokit.request('GET https://raw.githubusercontent.com/{owner}/{repo}/main/docs/{path}', {
    owner: 'bonfire-networks',
    repo: 'bonfire-app',
    path: 'ARCHITECTURE.md'
  }).then(res => { 
    return res.data
    })
  .catch(err => { console.log(err) })
};