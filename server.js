import express from 'express'
import RouterNumeros from './router/numeros.js'

const app = express()
const routerNumeros = new RouterNumeros()

app.use(express.static('public'))
app.use(express.json())


/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/entrada', routerNumeros.start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(
        `Servidor express escuchando en el puerto ${PORT}`
))
server.on('error', error => console.log('Servidor express en error:', error) )
