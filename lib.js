function padZero(n) {
  return (n < 10) ? '0'+n : n;
}
function uniqueRandom(n, m){
  var result = Math.floor((Math.random()*m) + 1);
  while(n === result){
    result = Math.floor((Math.random()*m) + 1);
  }
  return result;
}

function getRandom(n){
  console.log(n);
  var result = Math.floor((Math.random()*n));
  console.log(result);
  return result;
}

function getArray(count){
  var tmpArr = [];
	for (var i = 0; i < count; i++) {
		tmpArr.push( i+1 );
	}
	return tmpArr
}