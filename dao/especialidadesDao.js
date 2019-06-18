const mysql = require('./baseDao');

module.exports = {
  getById: async id => (await mysql.executeString(`SELECT * FROM especialidade WHERE esp_codigo = ${id}`)).content,
  getAll: async () => (await mysql.executeString('SELECT * FROM especialidade')).content,
  insert: async body => (await mysql.executeObject('INSERT INTO especialidade SET ?', body)).content,
  update: async body => (await mysql.executeObject(`UPDATE especialidade SET ? WHERE esp_codigo = ${body.esp_codigo}`, body)).content,
  delete: async id => (await mysql.executeString(`DELETE FROM especialidade WHERE esp_codigo = ${id}`)).content,
};
