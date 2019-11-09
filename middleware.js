var middleware = {
  requireAuthentication: (req, res, next) => {
    console.log('this is a private route');
    next();
  },
  logger: (req, res, next) => {
    console.log('Request: ' + req.method + 'to: ' + req.originalUrl + ', on: ' + new Date().toString());
    next();
  }
}
module.exports = middleware;

