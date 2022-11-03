import ApiNumeros from '../api/numeros.js'

class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    obtenerNumeros = async (req,res) => {
        try {
            let numero = req
            console.log(`numero obtenido por controlador: ${numero}`)
            let numeros = await this.apiNumeros.obtenerNumeros(numero)

            res.send(numeros)
        }
        catch(error) {
            console.log('error obtenerNumeros: ', error)
        }
    }

    guardarNumero = async (req,res) => {
        try {
            let numero = JSON.parse(req)
            console.log(`numero guardado por controlador ${numero}`)
            let numeroGuardado = await this.apiNumeros.guardarNumero(numero)

            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error guardarNumero', error)
        }
    }


}

export default ControladorNumeros
