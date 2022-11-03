import NumerosFactoryDAO from '../model/DAOs/numerosFactory.js'

class ApiNumeros {

    constructor() {
        this.NumerosDAO = NumerosFactoryDAO.get()
    }

    async obtenerNumeros(numero) { 
        let numeros = await this.NumerosDAO.obtenerNumeros(numero)
        return numeros.map(n => n.numero).join(' ')
    }

    async guardarNumero(numero) { 
        return await this.NumerosDAO.guardarNumero(numero) 
    }


}

export default ApiNumeros
