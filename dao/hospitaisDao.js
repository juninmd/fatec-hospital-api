const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM hospital WHERE hos_codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM hospital`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO hospital SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE hospital SET ? WHERE hos_codigo = ${body.hos_codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM hospital WHERE hos_codigo = ${id}`)).content;
  }
};
