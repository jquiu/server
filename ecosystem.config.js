module.exports = {
  apps: [
    {
      name: 'server meli',
      script: 'npm',
      args: 'run dev',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        HOST: '0.0.0.0',
        PORT: 9000,
        NODE_ENV: 'production',
      },
      env_development: {
        HOST: '0.0.0.0',
        PORT: 9000,
        NODE_ENV: 'development',
      },
    },
  ],
};
