const express = require('express')
const app = express()

app.use("/opa",(req, res, next) => {
    console.log('Antes')
    next()
})

app.get("/opa",(req, res, next) => {
    // res.send("<h1>Estou bem e funcional</h1>")
    /*res.json({
        name: 'God of War Ragnarok',
        price: 299,
        Genre: 'Aventure'
    })*/
    console.log('Durante')
    res.json([
        {id:1,
         nome: "Matheus"},
        {id: 2,
         nome: "Giovanny"
        },
        {id: 3,
         nome: "Isla"
        }
    ])
    next()
})

    app.use("/opa", (req, res, next) => {
        console.log('Depois')
    })

app.listen(3000, () => {
    console.log('Servidor Iniciado')
})

