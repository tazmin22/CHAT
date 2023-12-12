const express = require('express')
const handlebars = require('express-handlebars')
const{Server} = require('socket.io')


const viewsRouter = require ("./routes/views.router.js")



const app = express()
const port = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')


//CONFIGURACION DE RUTA

app.use ('/', viewsRouter)


const httpServer = app.listen(port, () => {
  console.log(`Server funciona en port ${port}`);
});



const io = new Server(httpServer)

let messagesArray = []

io.on('connection', socket => {
    console.log('Nuevo cliente conectado')

    socket.on('message', data => {
        messagesArray.push(data)
        io.emit('messageLogs', messagesArray)
    })
})

