const Fetch = require('@11ty/eleventy-fetch');
require('dotenv').config();

module.exports = async function() {
  // The repo name would typically come from a URL parameter or similar
  const repoName = 'bonfire_ui_social'; // Replace with dynamic value as needed

  // Return empty object if no token is configured
  if (!process.env.API_TOKEN) {
    console.log('GitHub API token not configured, skipping repo data fetch');
    return {};
  }

  try {
    return await Fetch(`https://api.github.com/repos/bonfire-networks/${repoName}`, {
      duration: '1d',
      type: 'json',
      fetchOptions: {
        headers: {
          'Authorization': `token ${process.env.API_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        },
        signal: AbortSignal.timeout(8000)
      }
    });
  } catch (error) {
    console.error('GitHub API error: ' + (error.response?.data?.message || error.message));
    return {}; // Return an empty object in case of error
  }
};