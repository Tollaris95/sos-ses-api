const MongoStore = require("connect-mongo");

module.exports.session = {
  secret: process.env.SESSION_SECRET || "d54dcb5dc070ec612015b0e93ba026f9",

  adapter: "mongo",
  url: "mongodb://admin:pissenlit2025!@127.0.0.1:27017/sessions?authSource=admin",
  collection: "sessions",
  ttl: 14 * 24 * 60 * 60,

  store: MongoStore.create({
    mongoUrl: "mongodb://admin:pissenlit2025!@127.0.0.1:27017/sessions?authSource=admin",
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60,
    autoRemove: "native",
  }),

  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
};
