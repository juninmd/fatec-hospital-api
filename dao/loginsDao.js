const mysql = require('./baseDao');

module.exports = {
  login: async ({ email, senha }) => {
    return (await mysql.executeString(`SELECT * FROM usuario WHERE email = '${email}' and senha = '${senha}'`)).content;
  },
};
