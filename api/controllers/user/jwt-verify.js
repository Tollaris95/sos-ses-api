const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  friendlyName: "Verify JWT",

  description: "Vérifie la validité d'un token JWT.",

  inputs: {
    token: {
      type: "string",
      required: true,
      description: "Token JWT de l'utilisateur",
    },
  },

  exits: {
    success: {
      description: "Le token est valide.",
    },
    invalidToken: {
      description: "Le token est invalide ou expiré.",
      responseType: "unauthorized",
    },
  },

  fn: async function (inputs, exits) {
    const jwtSecret = process.env.JWT_SECRET;

    try {
      // Vérification du token
      const decoded = jwt.verify(inputs.token, jwtSecret);

      // Le token est valide, on retourne les informations décodées
      return exits.success({ valid: true, decoded });
    } catch (error) {
      sails.log.error("Erreur de vérification du token:", error.message);
      
      // Retourner une erreur si le token est invalide
      return exits.invalidToken({ valid: false, message: "Token invalide ou expiré" });
    }
  },
};
