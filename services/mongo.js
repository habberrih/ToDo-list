const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://todo-api:7EzyPz92LRP0GPzP@todocluster.eud9gse.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
    console.log('mongodb connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});


async function mongoConnect(){
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};
