import express from 'express'

const server = express()

let Girls = [{
    id: '205',
    name: 'Sara Cohen',
    age: 17,
    class: 'יא'
}, {
    id: '654',
    name: 'Chava Levi',
    age: 15,
    class: 'ט'
}, {
    id: '935',
    name: 'Ruth Katz',
    age: 18,
    class: 'יב'
}, {
    id: '156',
    name: 'Rivka Lev',
    age: 20,
    class: 'יד'
}]


server.get('/Girls',(req,res)=>{
    res.json(Girls)
})

server.get('Girls/:id',(req,res)=>{
    const id=req.params.id
    res.json(Girls.find(g=>g.id===id))
    console.log("success");
})

server.delete('/Girls/:id',(req,res)=>{
 const id=req.params.id
 Girls=Girls.filter(g=>g.id!==id)
 res.send("Girls deleted")
})
server.listen(5000, () => {
  console.log('Server running on https://localhost:5000')
})