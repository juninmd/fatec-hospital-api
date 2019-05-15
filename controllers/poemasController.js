const poemasDao = require('../dao/poemasDao');

module.exports = (app) => {
  app.get('/poemas', async (req, res, next) => {
    try {
      const response = await poemasDao.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/poemas/:id', async (req, res, next) => {
    try {
      const response = await poemasDao.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/poemas/', async (req, res, next) => {
    try {
      await poemasDao.insert(req.body);
      return res.send({}).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/poemas/:id', async (req, res, next) => {
    try {
      await poemasDao.update(req.body);
      return res.send({}).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/poemas/:id', async (req, res, next) => {
    try {
      await poemasDao.delete(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};
