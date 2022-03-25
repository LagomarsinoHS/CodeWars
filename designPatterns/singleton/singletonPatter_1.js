/*
Singleton se utiliza cuando solo quiero tener una instancia de clase para ejecutar X cosa, como por ejemplo un singleton que sea el que permita
crear una conexion a BD, asi, en caso de que un proyecto se conecta a la BD, si se intenta re conectar con otra instancia, esta no lo permita y devuelva
la instancia anteriormente creada"
*/

class Database {
    constructor() {
        if (Database.instance instanceof Database) {
            return Database.instance;
        }
        this.connectionURL = {
            name: "",
            options: {}
        }

        // This disallows modifying the instance we created
        Object.freeze(this);
        
        Database.instance = this;
    }


    connect(uri, options) {
        this.connectionURL.name = name;
        this.connectionURL.options = options;
        console.log(`DB: ${uri} connected!`);
    }

    disconnect() {
        console.log(`${this.connectionURL.name} is disconnected!`);
    }
}

const db = new Database()

const db1 = new Database()

console.log(db === db1)
  // true