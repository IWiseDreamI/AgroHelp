import mysql from "mysql2/promise"
import config from "../config.js"

const sql = mysql.createPool(config.db)

sql.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    else{
        console.log("Successfully connected to database")
    }
})

export default sql;