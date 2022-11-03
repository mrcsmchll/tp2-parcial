class NumerosMemDAO {

    constructor() {
        this.numeros = [1]
    }

    // getNext_Id(numeros) {
    //     let lg = numeros.length
    //     return lg? parseInt(numeros[lg-1].id) + 1 : 1
    // }

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
            // let id = this.getNext_Id(this.numeros)
            // numero.id = id
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
            return promedio = this.numeros.reduce((a, b) => a + b, 0) / this.numeros.length;
        } catch (error) {
            console.log('error en calcularPromedio: ', error )
            return promedio
        }
    }

    obtenerMinMax = async _ => {
        try {
            return minMax = {
                min: Math.min(this.numeros),
                max: Math.max(this.numeros)
            }

        } catch (error) {
            console.log('error en la obtenerMinMax: ', error)
        }
    }

    obtenerCantidad = async _ => {
        try{
            return this.numeros.length
        } catch (error) {
            console.log('error en obtenerCantidad: ', error)
        }

    }
}

export default NumerosMemDAO