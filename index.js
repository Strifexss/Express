const express = require('express')
const saudacao = require('./saudacaoMid')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.text())
app.use(bodyParser.json)
app.use(saudacao('Davi'))

app.use("/opa",(req, res, next) => {
    console.log('Antes')
    next()
})

app.get("/clientes/relatorio", (req, res, next) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
    next()
})
 
app.post('corpo', (req, res, next) => {
    /*let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })
    req.on('end', function() {
        req.send(corpo)
    })*/

    req.send(req.body.nome) //precisa ter feito o app.use(bodyParser.text()) lá em cima pode ser outro tmb como o .json
    next()
})

app.get("/clientes/:id", (req, res) => {
    res.send(`Cliente ${req.params.id} selecionando!`)
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

