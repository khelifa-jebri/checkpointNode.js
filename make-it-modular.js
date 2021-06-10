var lslib = require('./mymodule.js');

var dirname = process.argv[2];
var ext = process.argv[3];

lslib(dirname, ext, function (err, files) {
	if(err){
		return console.error("ERROR : ", err);
	}
	
    for (i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});