const express = require('express')
const app = express()
const port = 3000
const { pool, connectDB } = require('./db')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// Example route that queries the database
app.get('/query', async (req, res) => {
  try {
    const request = pool.request()
    const result = await request.query('SELECT * FROM YourTable')
    res.json(result.recordset)
  } catch (err) {
    console.error('Database query error', err)
    res.status(500).send('Internal Server Error')
  }
})

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})
