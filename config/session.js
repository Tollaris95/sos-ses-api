/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */
const MongoStore = require("connect-mongo");

module.exports.session = {
  /***************************************************************************
   *                                                                          *
   * Session secret is automatically generated when your new app is created   *
   * Replace at your own risk in production-- you will invalidate the cookies *
   * of your users, forcing them to log in again.                             *
   *                                                                          *
   ***************************************************************************/
  secret: "d54dcb5dc070ec612015b0e93ba026f9",

  adapter: "connect-mongo",
  store: MongoStore.create({
    mongoUrl:
      "mongodb://admin:pissenlit2025!@127.0.0.1:27017/sessions?authSource=admin",
    collectionName: "sessions",
    ttl: 14 * 24 * 60 * 60, // 14 jours d'expiration
  }),
  cookie: {
    secure: process.env.NODE_ENV === "production", // Sécurisé en production
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 jour
  },

  /***************************************************************************
   *                                                                          *
   * Customize when built-in session support will be skipped.                 *
   *                                                                          *
   * (Useful for performance tuning; particularly to avoid wasting cycles on  *
   * session management when responding to simple requests for static assets, *
   * like images or stylesheets.)                                             *
   *                                                                          *
   * https://sailsjs.com/config/session                                       *
   *                                                                          *
   ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },
};
