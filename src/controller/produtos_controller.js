const SelectProdutosPorId = require('../BD/produtos_dao')

class Produtos
{

listaProdutos(){
        return function(req, res){
            console.log("Id categoria enviado:" + req.body.categ)

            var id_categoria = req.body.categ
            SelectProdutosPorId(id_categoria).then(resultados =>
                {
                    res.marko(
                        require('../view/index.marko'),
                        {
                            produtos: resultados,
                            categs: resultados,
                            categoria: resultados[0].descCatProd
                        }
                    )

                }
    ) .catch(erro => res.send(erro));
    

}}

}

module.exports = new Produtos()