const { createUserDb } = require(`../repository/user.repository`);

async function createUser(name, surname, email, pwd) {
  const data = await createUserDb(name, surname, email, pwd);
  if (data.length == 0) throw new Error(`Данные не сохранены`);
  return data;
}


module.exports = {createUser}
