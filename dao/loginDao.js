const mysql = require('./baseDao');

module.exports = {
  login: async ({ email, senha }) => (await mysql.executeString(`SELECT * FROM usuario WHERE usu_email = '${email}' and usu_senha = '${senha}'`)).content,
};