const selectCategorias = require('../BD/categorias_dao');

function listarCategorias(req,res) {

    selectCategorias().then( resultados => {
        res.marko(
        require('../view/index.marko'),
        {
        categs: resultados,
        produtos: null
        })
        .catch(erro => res.send(erro));
                        
    })
        
}


module.exports = listarCategorias