import express from 'express'
const server = express()
let books = [{
    code: '205',
    name: 'life',
    color:'pink'
}, {
    code: '205',
    name: 'singel',
    color:'green'
}, {
    code: '205',
    name: 'tomorow',
    color:'blue'
}, {
    code: '205',
    name: 'englishbook',
    color:'black'
}]
server.get('/books', (req, res) => {
    res.json(books)
})

server.get('/books/:code', (req, res) => {
    const code = req.params.code
    res.json(books.find(s => s.code === code))
})

server.delete('/books/:code', (req, res) => {
    const code= req.params.code
    books = books.filter(s => s.code !== code)
    res.send("books deleted")
})

server.listen(5000, () => {
    console.log('Server running on https://localhost:5000')
})