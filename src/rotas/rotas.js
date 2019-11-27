
const listarCategorias = require('../controller/categorias_controller')


const ProdutosControlador = require('../controller/produtos_controller')


module.exports = (app) => {

    app.get('/', listarCategorias )

   app.post('/buscar', ProdutosControlador.listaProdutos() )
    


}


