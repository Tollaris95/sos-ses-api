module.exports.routes = {
  "POST  /user-create": {
    controller: "user",
    action: "create",
  },

  "POST  /user-login": {
    controller: "user",
    action: "login",
  },

  "GET  /user-jwt-verify": {
    controller: "user",
    action: "jwt-verify",
  },
};
