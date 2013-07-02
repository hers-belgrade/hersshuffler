var randomBytes = require('crypto').randomBytes;
function shuffle(length){
	var retval = [];
	try{
		var codes=[];
		var map = {};
		var buf = randomBytes(4*length);
		for(var i=0; i<length; i++){
			var code=buf[i*4+0]*256*256*256+buf[i*4+1]*256*256+buf[i*4+2]*256+buf[i*4+3];
			if(codes.indexOf(code)<0){
				codes.push(code);
				map[code]=i;
			}else{
				return [];
			}
		}
		//console.log(codes);
		codes.sort();
		for(var i in codes){
			retval.push(map[codes[i]]);
		}
	}
	catch(e){
		console.log('reshuffling because '+e);
		return [];
	}
	return retval;
}

module.exports = shuffle;
