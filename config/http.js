module.exports.http = {
  trustProxy: true,
  middleware: {
    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon'
    ],

    // Configuration du bodyParser avec skipper et augmentation de la limite à 20MB
    bodyParser: (function() {
      var skipper = require('skipper');
      return skipper({ limit: '50mb' });
    })(),
  },
};
