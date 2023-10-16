const sql = require('mssql')

const config = {
  user: 'your_username',
  password: 'your_password',
  server: 'your_server',
  database: 'your_database',
  options: {
    encrypt: true // Use if connecting to Azure SQL
  }
}

const pool = new sql.ConnectionPool(config)

const connectDB = async () => {
  try {
    await pool.connect()
    console.log('Connected to SQL Server')
  } catch (err) {
    console.error('Database connection error', err)
  }
}

module.exports = { pool, connectDB }
