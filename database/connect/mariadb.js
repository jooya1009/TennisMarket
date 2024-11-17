const mariadb = require('mysql');

const conn = mariadb.createConnection(
    {
        host: '127.0.0.1',
        port: 3306, // docker 때 적은 mariadb 포트
        user: 'root',
        password: 'root',
        database: 'Tennis'
    }
);

module.exports = conn;