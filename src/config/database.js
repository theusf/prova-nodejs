const mysql = require('mysql');


const conexao = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prova-nodejs'

})


conexao.connect( (err) => {

    if (err)
        console.log("Impossivel conectar ao bd prova-nodejs")
    else
        console.log("Conectado ao banco prova-nodejs")

})



module.exports = conexao;