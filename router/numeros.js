import express from 'express'
import ControladorNumeros from '../controlador/numeros.js'
const router = express.Router()


class RouterNumeros {

    constructor() {
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {
        router.post('/', this.controladorNumeros.guardarNumero)
        return router
    }

    getNumeros(){
        router.get('/', this.controladorNumeros.obtenerNumeros)
        return router
    }
    
    getPromedio() {
        router.get('/promedio', this.controladorNumeros.calcularPromedio)
        return router
    }
    getCant() {
        router.get('/cantidad', this.controladorNumeros.obtenerCantidad)
        return router
    }
    
    getMinMax() {
        router.get('/minmax', this.controladorNumeros.obtenerMinMax)
        return router
    }
}

export default RouterNumeros