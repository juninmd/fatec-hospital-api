const hospitaisDao = require('../dao/hospitaisDao');

module.exports = (app) => {
  app.post('/login', async (req, res, next) => {
    try {
      const [response] = await hospitaisDao.login(req.body);
      delete response.senha;
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/hospitais', async (req, res, next) => {
    try {
      const response = await hospitaisDao.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/hospitais/:id', async (req, res, next) => {
    try {
      const response = await hospitaisDao.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/hospitais/', async (req, res, next) => {
    try {
      await hospitaisDao.insert(req.body);
      return res.send({}).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/hospitais/:id', async (req, res, next) => {
    try {
      await hospitaisDao.update(req.body);
      return res.send({}).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/hospitais/:id', async (req, res, next) => {
    try {
      await hospitaisDao.delete(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};
