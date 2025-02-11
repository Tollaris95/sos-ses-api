const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  friendlyName: "Loggin User",

  description: "This action loggin User",
  inputs: {
    userName: {
      type: "string",
      required: true,
      description: " User userName",
    },
    password: {
      type: "string",
      required: true,
      description: "User password encrypt",
    },
  },

  fn: async function (inputs, exits, env) {
    const user = {
      userName: inputs.userName,
      password: inputs.password,
    };

    //Getting user document with valide password
    const isUserLogged = await User.findOne({
      userName: user.userName.toLowerCase(),
      password: user.password,
    });

    //If user is found and it's password is correct
    if (isUserLogged) {
      //Getting secret value for token
      const jwtSecret = process.env.JWT_SECRET;
      //Setting token
      const options = {
        expiresIn: "365d",
      };
      //Setting token
      const token = jwt.sign(
        {
          userId: useruserName.userName,
        },
        jwtSecret,
        options
      );
      //If user is logged and is Premium
      return env.res.status(200).json({
        text: "User logged in",
        token: token,
      });
    } else {
      return env.res.status(401).json({
        text: "Wrong password",
      });
    }
  },
};
