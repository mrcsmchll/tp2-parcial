import express from 'express'
const router = express.Router()

import ControladorNumeros from '../controlador/numeros.js'

class RouterNumeros {

    constructor() {
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {
        router.get('/', this.controladorNumeros.obtenerNumeros)
        router.post('/', this.controladorNumeros.guardarNumero)

        return router
    }
}

export default RouterNumeros