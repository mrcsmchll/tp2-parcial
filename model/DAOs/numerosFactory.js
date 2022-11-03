import NumerosMemDAO from './numerosMem.js'

class NumerosFactoryDAO {
    static get() {
        return new NumerosMemDAO()
    }
}

export default NumerosFactoryDAO