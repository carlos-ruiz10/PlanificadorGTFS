module.exports= {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || '127.0.0.1',
        port: process.env.MYSQL_PORT || "3306",
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'c1a9r9g5',
        database: process.env.MYSQL_DATABASE || 'gtfscdmx',
    }
}