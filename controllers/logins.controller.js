
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

}