module.exports.security = {
  cors: {
    allRoutes: true,
    allowOrigins: ['http://localhost:3000'], // Autorise uniquement localhost:3000
    allowCredentials: true,
    allowRequestHeaders: 'content-type, authorization'
  }
};
