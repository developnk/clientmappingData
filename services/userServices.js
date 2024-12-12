const db = require('../db');

async function createUser(userData) {
  const { name, email } = userData;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  const [result] = await db.execute(sql, [name, email]);
  return result;
}

module.exports = {
  createUser,
};
