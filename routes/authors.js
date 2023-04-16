import { Router } from 'express'

import authors from '../data/authors.json' assert { type: 'json' }
import { not_found } from '../consts/errors.js'
import { generateRandomNum } from '../scripts/generateRandomNum.js'

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json(authors)
})

router.get('/random', (req, res) => {
    res.status(200).json(authors[generateRandomNum(0, authors.length)])
})

router.get('/search', (req, res) => {
    const { q } = req.query
    
    if(!q) return res.status(400).json({
        status: 400,
        message: 'You must provide a query'
    })
    
    const authorsFound = authors.filter(author => author.author.toLowerCase().includes(q.toLowerCase()))
    res.status(200).json(authorsFound)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const author = authors.find(author => author.id == id || author.author_uuid == id || author.author == id)
    if(!author) return res.status(404).json(not_found)
    res.status(200).json(author)
})

export default router