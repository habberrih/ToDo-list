module.exports = {
    apps: [
      {
        name: 'myapp-api',
        script: 'npm run start:dev',
        time: true,
        instances: 1,
        autorestart: true,
        max_restarts: 50,
        watch: false,
        max_memory_restart: '1G',
        env: {
          PORT: process.env.PORT || 5000,
          DATABASE_URL: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}?schema=public`
        },
      },
    ],
    deploy: {
      production: {
        user: process.env.USER,
        host: process.env.HOST,
        key: 'deploy.key',
        ref: 'origin/master',
        repo: 'https://github.com/habberrih/ToDo-list',
        path: process.env.PATH,
        'post-deploy':
          'sudo docker compose up - d && npm install && npm build && pm2 reload ecosystem.config.js --env production && pm2 save',
        env: {
          NODE_ENV: 'production',
          DATABASE_URL: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}?schema=public`
        },
      },
    },
  }