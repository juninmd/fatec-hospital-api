const loginDao = require('../dao/loginDao');

module.exports = (app) => {
  app.post('/login', async (req, res, next) => {
    try {
      const [response] = await loginDao.login(req.body);
      delete response.usu_senha;
      return res.send(response).status(200);
    } catch (error) {
      next(error);
    }
  });
};
