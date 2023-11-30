docker compose up -d
cp .env.example .env
npx prisma migrate deploy
pm2 start ecosystem.config.js
