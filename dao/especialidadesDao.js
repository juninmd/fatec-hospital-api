const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM especialidade WHERE codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM especialidade`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO especialidade SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE especialidade SET ? WHERE codigo = ${body.codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM especialidade WHERE codigo = ${id}`)).content;
  }
};
