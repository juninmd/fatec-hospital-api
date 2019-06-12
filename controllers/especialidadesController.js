const especialidadesDao = require('../dao/especialidadesDao');

module.exports = (app) => {

  app.get('/especialidades', async (req, res, next) => {
    try {
      const response = await especialidadesDao.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/especialidades/:id', async (req, res, next) => {
    try {
      const response = await especialidadesDao.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/especialidades/', async (req, res, next) => {
    try {
      await especialidadesDao.insert(req.body);
      return res.send({}).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/especialidades/:id', async (req, res, next) => {
    try {
      await especialidadesDao.update(req.body);
      return res.send({}).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/especialidades/:id', async (req, res, next) => {
    try {
      await especialidadesDao.delete(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};
