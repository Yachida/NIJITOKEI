function padZero(n) {
  return (n < 10) ? '0'+n : n;
}

function getRandom(n){
  return Math.floor((Math.random()*n));
}

function getArray(count){
  var tmpArr = [];
	for (var i = 0; i < count; i++) {
		tmpArr.push( i+1 );
	}
	return tmpArr
}