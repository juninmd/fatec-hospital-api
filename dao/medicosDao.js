const mysql = require('./baseDao');

module.exports = {
  getById: async (id) => {
    return (await mysql.executeString(`SELECT * FROM medico WHERE med_codigo = ${id}`)).content;
  },
  getAll: async () => {
    return (await mysql.executeString(`SELECT * FROM medico`)).content;
  },
  insert: async (body) => {
    return (await mysql.executeObject(`INSERT INTO medico SET ?`, body)).content;
  },
  update: async (body) => {
    return (await mysql.executeObject(`UPDATE medico SET ? WHERE med_codigo = ${body.med_codigo}`, body)).content;
  },
  delete: async (id) => {
    return (await mysql.executeString(`DELETE FROM medico WHERE med_codigo = ${id}`)).content;
  }
};
