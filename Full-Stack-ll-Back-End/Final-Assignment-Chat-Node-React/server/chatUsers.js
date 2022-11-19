const users = [];

function addUser(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

function removeUser(id) {
  const index = users.findIndex(x => x.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function getUsersByRoom(room) {
    return users.filter(x => x.room === room);
}

function getUserById(id) {
    return users.find(x => x.id === id);
}

module.exports = {
    addUser,
    getUserById,
    removeUser,
    getUsersByRoom
};
