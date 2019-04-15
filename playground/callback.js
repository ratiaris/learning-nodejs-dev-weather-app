const getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Toto'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

module.exports = {
  getUser
};