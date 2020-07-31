module.exports = {
    //ubah DB yang sudah di bold dengan host mongodb masing-masing
    DB: process.env.HOST ? process.env.HOST : 'localhost',
    APP_PORT: process.env.PORT? process.env.PORT:80,
};
