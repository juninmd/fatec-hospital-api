const usuariosDao = require('../dao/usuariosDao');

module.exports = (app) => {
  app.post('/login', async (req, res, next) => {
    try {
      const [response] = await usuariosDao.login(req.body);
      delete response.senha;
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/usuarios', async (req, res, next) => {
    try {
      const response = await usuariosDao.getAll();
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.get('/usuarios/:id', async (req, res, next) => {
    try {
      const response = await usuariosDao.getById(req.params.id);
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.post('/usuarios/', async (req, res, next) => {
    try {
      await usuariosDao.insert(req.body);
      return res.send({}).status(201);
    } catch (error) {
      next(error);
    }
  });

  app.put('/usuarios/:id', async (req, res, next) => {
    try {
      await usuariosDao.update(req.body);
      return res.send({}).status(200);
    } catch (error) {
      next(error);
    }
  });

  app.delete('/usuarios/:id', async (req, res, next) => {
    try {
      await usuariosDao.delete(req.params.id);
      return res.send({}).status(204);
    } catch (error) {
      next(error);
    }
  });
};
