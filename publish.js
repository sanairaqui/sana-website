var ncp = require('ncp').ncp;
 var path = require('path');
ncp.limit = 16;
 
ncp(path.join(process.cwd(),'dist'), path.join(process.cwd(),'docs'), function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});