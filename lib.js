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
