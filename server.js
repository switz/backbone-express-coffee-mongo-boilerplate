require('coffee-script');
require('./server/index');

// don't crash for now
process.on('uncaughtException', function (err) {
   console.log(err.stack);
});
