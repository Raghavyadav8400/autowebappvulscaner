const users = [];

function createUser({ email, password }) {
  const newUser = {
    id: users.length + 1,
    email,
    password,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  return newUser;
}

function findUser(email) {
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

module.exports = {
  createUser,
  findUser,
};
