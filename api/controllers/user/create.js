const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  friendlyName: "Create user informations",

  description: "This action create a new user in the database",

  inputs: {
    userName: {
      type: "string",
      required: true,
      description: " user's userName ",
    },
    password: {
      type: "string",
      required: false,
      description: " user's password ",
    },
  },

  fn: async function (inputs, exits, env) {
    //Setting object for new user document
    const paramsAll = {
      userName: "kesiane",
      password: inputs.password,
      from: [inputs.from],
    };
    //Create new user in data base
    const newUser = await User.create({
      ...paramsAll,
    })
      .intercept(
        {
          name: "UsageError",
        },
        "invalid"
      )
      .fetch();

    //Getting secret value for token
    const jwtSecret = process.env.JWT_SECRET;
    //Setting token
    const options = {
      expiresIn: "365d",
    };
    //Setting token
    const token = jwt.sign(
      {
        userId: newUser.id,
      },
      jwtSecret,
      options
    );

    const allUsers = await User.find();
    console.log("📌 Liste des utilisateurs en base :", allUsers);

    if (newUser) {
      return env.res.status(200).json({
        text: "User created",
        user: newUser,
        token: token,
      });
    } else {
      return env.res.status(400).json({
        text: "User not created",
      });
    }
  },
};
