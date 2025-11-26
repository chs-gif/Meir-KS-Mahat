import express from 'express'

const server = express()

let flower = [{
    id: '1234',
    color: 'red',
    size: '3'
}, {
    id: '1354',
    color: 'red',
    size: '3'
}, {
    id: '128934',
    color: 'red',
    size: '3'
}
]
server.get('/flower',(res,req)=>{
    res.json(flower)
})


server.get('/flower/:id', (req, res) => {
    // לקיחת הפרמטרים מהURL
    const id = req.params.id
    res.json(flower.find(s => s.id === id))
})

server.delete('/flower/:id', (req, res) => {
    const id = req.params.id
    flower = flower.filter(s => s.id !== id)
    res.send("flower deleted")
})



// הגדרת הפורט של הסרבר שלי
server.listen(4000, () => {
    console.log('Server running on https://localhost:4000')
})

