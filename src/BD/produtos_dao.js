const conexao = require('../config/database');

function selectProdutosPorIdCateg(id_categoria) {

    return new Promise((resolve, reject) => {
        
            let sql = "SELECT produto.descProd,produto.valorProd,categoriaproduto.descCatProd,categoriaproduto.idCatProd FROM produto " +
             "inner join categoriaproduto on categoriaproduto.idCatProd = produto.idCatProd " +
            "where produto.idCatProd = " + id_categoria 
            conexao.query(sql, (erro,resultados) => {
                console.log(resultados)
                if (resultados.length > 0)
                    resolve(resultados)
                
                    reject(erro)
        
            })} )
        
}

module.exports = selectProdutosPorIdCateg