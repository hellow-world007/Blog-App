/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'joymondal',    
        mongodb_password: 'Nextjsblogapp',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-data-dev', 
      },
    }
  }
  return {
    env: {
      mongodb_username: 'joymondal',    
      mongodb_password: 'Nextjsblogapp',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog-data', 
    },
  }
}
