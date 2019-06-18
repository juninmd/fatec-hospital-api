const medicosDao = require('../dao/medicosDao');

module.exports = (app) => {
  app.get('/medicos', async (req, res, next) => {
    try {
      const response = await medicosDao.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/medicos/:id', async (req, res, next) => {
    try {
      const response = await medicosDao.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/medicos/', async (req, res, next) => {
    try {
      await medicosDao.insert(req.body);
      return res.send({}).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/medicos/:id', async (req, res, next) => {
    try {
      await medicosDao.update(req.body);
      return res.send({}).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/medicos/:id', async (req, res, next) => {
    try {
      await medicosDao.delete(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};
