module.exports = {
    apps: [
        {
            name: 'Todo API',
            script: 'dist/src/main.js',
            args: 'start',
            env_local: {
                APP_ENV: 'local' // APP_ENV=local
            },
            env_development: {
                APP_ENV: 'dev' // APP_ENV=dev
            },
            env_production: {
                APP_ENV: 'prod' // APP_ENV=prod
            }
        }
    ]
}