$.ajaxSetup({ cache: false });

function padZero(n) {
  return (n < 10) ? '0'+n : n;
}

function getRandom(n){
  return Math.floor((Math.random()*n));
}

function seekSize(src,dst){
  return Math.round((src / 2) + ((src / 2) * dst /100 ));
}

function arrayCopy(src){
  var dst = [];
  for(var d in src){
    dst[dst.length] = src[d];
  }
  return dst;
}
