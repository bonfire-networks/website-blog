const { Octokit } = require("@octokit/core");
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

module.exports = async function() {
  return octokit.request('GET /repos/{owner}/{repo}/releases', {
    owner: 'bonfire-networks',
    repo: 'bonfire-app',
  })
  .then(res => { 
    console.log(res.data[0].tag_name)
    return res.data[0].tag_name
  })
  .catch(err => { console.log(err) })
};
