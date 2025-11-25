
import express from 'express'

const server = express()

let flower =[{
    id:'1234',
    color:'red',
    size:'l'
}, {
    id:'456',
    color:'pink',
    size:'m'
},{
    id:'985',
    color:'blue',
    size:'s'
}]

server.get('/flower', (req,res) => {
    res.json(flower)
})

server.get('/flower/:id', (req,res) => {
    const id=req.params.id
    res.json(flower.find(s => s.id ===id))
})

server.delete('/flower/:id', (req,res) => {
    const id=req.params.id
    flower= flower.filter(s => s.id != id)
    res.send("flower is deleted")
})
server.listen(5000, () => {
   console.log('Server running on https://localhost:5000');
    
})