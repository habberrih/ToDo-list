const fs = require('fs');
const path = require('path');
const app = require('./app');
const https = require('https');
const { mongoConnect } = require('../services/mongo');
const PORT = process.env.PORT || 8080;

const options = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

require('dotenv').config();

const server = https.createServer(options, app);

async function startServer(){
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });

}

startServer();
