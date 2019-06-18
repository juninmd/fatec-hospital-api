const mysql = require('./baseDao');

module.exports = {
  getById: async id => (await mysql.executeString(`SELECT * FROM hospital WHERE hos_codigo = ${id}`)).content,
  getAll: async () => (await mysql.executeString('SELECT * FROM hospital')).content,
  insert: async body => (await mysql.executeObject('INSERT INTO hospital SET ?', body)).content,
  update: async body => (await mysql.executeObject(`UPDATE hospital SET ? WHERE hos_codigo = ${body.hos_codigo}`, body)).content,
  delete: async id => (await mysql.executeString(`DELETE FROM hospital WHERE hos_codigo = ${id}`)).content,
};
