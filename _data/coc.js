const { Octokit } = require("@octokit/core");
const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});


module.exports = async function() {
  return octokit.request('GET https://raw.githubusercontent.com/bonfire-networks/blog/master/code_of_conduct.md', {}).then(res => { 
    return res.data
    })
  .catch(err => { console.log(err) })
};