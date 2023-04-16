import { Router } from 'express'

import quotes from '../data/quotes.json' assert { type: 'json' }
import { not_found } from '../consts/errors.js'
import { generateRandomNum } from '../scripts/generateRandomNum.js'

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json(quotes)
})

router.get('/random', (req, res) => {
    res.status(200).json(quotes[generateRandomNum(0, quotes.length)])
})

router.get('/search', (req, res) => {
    const { q } = req.query

    if(!q) return res.status(400).json({
        status: 400,
        message: 'You must provide a query'
    })

    const quotesFound = quotes.filter(quote => quote.quote.toLowerCase().includes(q.toLowerCase()))
    res.status(200).json(quotesFound)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const quote = quotes.find(quote => quote.id == id || quote.uuid == id)
    if(!quote) return res.status(404).json(not_found)
    res.status(200).json(quote)
})

export default router