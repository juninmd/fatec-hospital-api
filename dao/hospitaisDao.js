const mysql = require('./baseDao');

module.exports = {
  login: async ({ email, senha }) => {
    return (await mysql.executeString(`SELECT * FROM hospital WHERE email = '${email}' and senha = '${senha}'`)).content;
  },
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM hospital WHERE codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM hospital`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO hospital SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE hospital SET ? WHERE codigo = ${body.codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM hospital WHERE codigo = ${id}`)).content;
  }
};
