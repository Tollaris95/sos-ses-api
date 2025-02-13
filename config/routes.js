module.exports.routes = {
  //user
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

  //course 
  "POST  /course-create": {
    controller: "course",
    action: "create",
  },
};
