function isValidUserBody(request, response, next) {
  const { name, surname, email, pwd } = request.body;
  if (!name) throw new Error(`!!!name!!!!`);
  if (!surname) throw new Error(`!!!surname!!!!`);
  if (!email) throw new Error(`!!!email!!!!`);
  if (!pwd) throw new Error(`!!!pwd!!!!`);
  if (!isNaN(name)) throw new Error(`!!!name not corected!!!!`);
  if (!isNaN(surname)) throw new Error(`!!!surname not corected!!!!`);
  next();
}

module.exports = { isValidUserBody };
