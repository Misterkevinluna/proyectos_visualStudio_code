const express = require("express");
const router = express.Router();

const controller = require("../controllers/categorias.controller");

/*Es importante el orden en como colocas las rutas, la ruta '/create' estuviera debajo del '/:id' la ruta del '/create' en la web te apareceria no encontrada
ya que como el codigo se ejecuta de arriba hacia habajo, al encontra la ruta de '/:id' primero que '/create' este interpreta que el parametro :id que esta despues
del slash(/)  puede ser cualquier cosa, entonces Express cree que la palabra 'create' es un id y lo coloca en la ruta y de esta forma usa la lina de codigo
router.get('/:id', controller.show) y no la del router.get('/create', controller.create);*/
//Regla de oro: Siempre pon primero las rutas más específicas y al final las rutas más genéricas.
router.get('/create', controller.create);
router.post('/store', controller.store);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit);
//PUT es un metodo de peticion para actuaiar el registro completo
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);


module.exports = router;