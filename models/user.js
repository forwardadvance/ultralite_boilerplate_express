module.exports = function User(data) {
  if (data) {
    this.name = data.name ;
    this.email = data.email;
  }
};
