class NumerosMemDAO {

    constructor() {
        this.numeros = []
    }

    obtenerNumeros = async () => {
        try {
            return this.numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros ', error)
            return []
        }
    }

    guardarNumero = async numero => {
        try {
            this.numeros.push(numero)
            return numero
        }
        catch(error) {
            console.log('error en guardarNumero: ',error)
            let numero = {}
            return numero
        }
    }

    calcularPromedio = async _ => {
        try {
            let promedio = {
                promedio: this.numeros.reduce((a, b) => a + b, 0) / this.numeros.length
            }
            return promedio

        } catch (error) {
            console.log('error en calcularPromedio: ', error )
            let promedio = {}
            return promedio
        }
    }

    obtenerMinMax = async _ => {
        try {
            let minMax = {
                min: Math.min(this.numeros),
                max: Math.max(this.numeros)
            }
            return minMax 

        } catch (error) {
            console.log('error en la obtenerMinMax: ', error)
            let minMax = {}
            return minMax
        }
    }

    obtenerCantidad = async _ => {
        try{
            let cantidad = {
                cantidad: this.numeros.length
            }
            return cantidad

        } catch (error) {
            console.log('error en obtenerCantidad: ', error)
            let cantidad = {}
            return cantidad
        }

    }
}

export default NumerosMemDAO