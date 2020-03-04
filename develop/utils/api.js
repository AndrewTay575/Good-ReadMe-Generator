const api = {
  getUser(username) {
    inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })

  }
};

module.exports = api;
