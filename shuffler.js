var randomBytes = require('crypto').randomBytes;
function shuffle(length){
	var retval = [];
  var codes={};
  var codearray=[];
  var map = {};
  var buf = randomBytes(4*length);
  for(var i=0; i<length; i++){
    var code=buf[i*4+0]*256*256*256+buf[i*4+1]*256*256+buf[i*4+2]*256+buf[i*4+3];
    if(!codes[code]){
      codes[code]=1;
      codearray.push(code);
      map[code]=[i];
    }else{
      (((randomBytes(1))[0])%2) ? (map[code]).unshift(i):(map[code]).push(i);
    }
  }
  codearray.sort(function(a,b){return a-b;});
  for(var i in codearray){
    Array.prototype.push.apply(retval,map[codearray[i]]);
  }
	return retval;
}

module.exports = shuffle;
