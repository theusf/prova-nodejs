
const conexao = require('../config/database');

function SelectCategorias() {
    return new Promise((resolve, reject) => {

    let sql = "SELECT * FROM categoriaproduto" 

    conexao.query(sql, (erro,resultados) => {

        console.log(resultados)

        if (resultados.length > 0)
            resolve(resultados)
        
            reject(erro)

    })} )


}

//Exportei diratemente a funcao pq só existe isso no dao....
module.exports = SelectCategorias;
