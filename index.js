import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import treblle from '@treblle/express'
import quotes from './routes/quotes.js'
import authors from './routes/authors.js'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(
    treblle({
        apiKey: process.env.TREBLLE_API_KEY,
        projectId: process.env.TREBLLE_PROJECT_ID,
        additionalFieldsToMask: [],
    })
)
app.use(cors())

app.use('/quotes', quotes)
app.use('/authors', authors)

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))