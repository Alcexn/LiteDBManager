const mysql = require('mysql2');

// 创建连接池配置
const db = mysql.createPool({
    host: '127.0.0.1',  // MySQL 服务器地址
    user: 'root',       // MySQL 用户名
    password: 'root',   // MySQL 密码
    connectionLimit: 10 // 连接池的最大连接数
});

function test(callback) {
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            callback(err);
            return;
        }
        connection.release(); // 释放连接
        callback(null);
    });
}

// 导出连接池和测试函数
module.exports = {
    test,
    db
};