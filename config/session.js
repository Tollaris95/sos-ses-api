const MongoStore = require("connect-mongo");

module.exports.session = {
  secret: process.env.SESSION_SECRET || "d54dcb5dc070ec612015b0e93ba026f9",

  // Sails utilise "mongo" au lieu de "connect-mongo" pour l'adaptateur
  adapter: "mongo",
  
  // Connexion MongoDB
  url: "mongodb://admin:pissenlit2025!@127.0.0.1:27017/sessions?authSource=admin",
  collection: "sessions",
  ttl: 14 * 24 * 60 * 60, // 14 jours

  // Configuration du stockage des sessions
  store: MongoStore.create({
    mongoUrl: "mongodb://admin:pissenlit2025!@127.0.0.1:27017/sessions?authSource=admin",
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60, // 14 jours
    autoRemove: "native", // Nettoyage automatique
  }),

  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 jour
  },
};
