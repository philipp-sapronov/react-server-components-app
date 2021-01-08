exports.tryCatch = function(tryer, catcher) {
  return async function() {
    try {
      return await tryer.apply(this, arguments);
    } catch (e) {
      return await catcher.apply(this, [e].concat(arguments));
    }
  };
};

exports.handleError = function(error) {
  console.log(error, 'ERROR');
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};
