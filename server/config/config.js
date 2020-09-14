// puerto

process.env.PORT = process.env.PORT || 3000;


//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//BASE DE DATOS

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://prueba:ZANxup2UAZnfNdu4@cluster0.j1vct.mongodb.net/cafe?retryWrites=true&w=majority'
}


process.env.URLDB = urlDB;