const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURL = `mongodb://${host}/vesna_master`;
const readLine = require('readline');

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL,
        { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }),
        1000);
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURL);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on ('SIGINT', () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

connect();

//bring models to the application
require('./books')
