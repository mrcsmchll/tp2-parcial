import NumerosFactoryDAO from '../model/DAOs/numerosFactory.js'

class ApiNumeros {

    constructor() {
        this.NumerosDAO = NumerosFactoryDAO.get()
    }

    async obtenerNumeros(numero) { 
        let numeros = await this.NumerosDAO.obtenerNumeros(numero)
        return numeros
    }

    async guardarNumero(numero) { 
        return await this.NumerosDAO.guardarNumero(numero) 
    }

    async calcularPromedio() {
        return await this.NumerosDAO.calcularPromedio()
    }
 
    async obtenerMinMax() {
        return await this.NumerosDAO.obtenerMinMax()
    }

    async obtenerCantidad() {
        return await this.NumerosDAO.obtenerCantidad()
    }
}

export default ApiNumeros
