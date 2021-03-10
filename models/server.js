const express = require('express');
const cors = require('cors');
const routes = require('../routes/usuarios');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/usuarios', routes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando el puerto', this.port);
        })
    }
}

module.exports = Server;