const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

require('dotenv').config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false
  });

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => console.error('Error : ', error));

beforeEach((done) => {
        mongoose.connection.collections.systems.drop(() => {
        done();
    }); 
});