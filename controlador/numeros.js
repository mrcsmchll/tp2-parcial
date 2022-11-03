import ApiNumeros from '../api/numeros.js'

class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    obtenerNumeros = async (req,res) => {
        try {
            let numero = req.body.numero
            let numeros = await this.apiNumeros.obtenerNumeros(numero)

            res.json(numeros)
        }
        catch(error) {
            console.log('error obtenerNumeros: ', error)
        }
    }

    guardarNumero = async (req,res) => {
        try {
            let numero = req.param.body
            console.log(`numero guardado por controlador ${numero}`)
            let numeroGuardado = await this.apiNumeros.guardarNumero(numero)

            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error guardarNumero', error)
        }
    }
    
    calcularPromedio = async (req,res) => {
        try {
            let promedio = await this.apiNumeros.calcularPromedio()
            res.json(promedio)
        } catch (error) {
            console.log('error calcularPromedio', error)
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            let minMax = await this.obtenerMinMax()
            res.json(minMax)
        } catch (error) {
            console.log('error en obtenerMinMax: ', error)
        }
    }

    obtenerCantidad = async (req,res) => {
        try {
            let cant = await this.apiNumeros.obtenerCantidad()
            res.json(cant)
        } catch (error) {
            console.log('error obtenerCantidad ', error)
        }
    }


}

export default ControladorNumeros
