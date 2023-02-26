import express from 'express'
import cors from 'cors'
import Connection from './database/db.js'
import route from './routes/route.js'

const app = express()
const port = 8000
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

Connection();

app.use("/", route)

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 