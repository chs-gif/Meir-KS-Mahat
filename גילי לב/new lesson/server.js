import express from 'express'

const server = express()

let products = [{
    id: '215',
    name: 'milk',
    price: 20,
}, {
    id: '654',
    name: 'bread',
    price: 15,
}, {
    id: '935',
    name: 'candy',
    price: 8,
}]

server.get('/products', (req, res) => {
    res.json(products)
})

server.get('/products/:id', (req, res) => {
    const id = req.params.id
    res.json(products.find(p => p.id === id))
})

server.delete('/product/:id', (req, res) => {
    const id = req.params.id
    products = products.filter(p => p.id !== id)
    res.send("product deleted")
})


server.listen(5000, () => {
    console.log('Server running on https://localhost:5000')
})