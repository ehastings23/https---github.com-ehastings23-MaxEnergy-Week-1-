const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: "45.55.75.0",       
    user: energy-support,       
    password:  S5OZGunyZdmgpqVu,  
    database: login_database,   
    port: process.env.DB_PORT || 3306 
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed: ' + err.message);
    } else {
        console.log('✅ Connected to the existing MySQL database!');
    }
});

module.exports = db;