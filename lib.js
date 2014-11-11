$.ajaxSetup({ cache: false });

function padZero(n) {
  return (n < 10) ? '0'+n : n;
}

function getRandom(n){
  return Math.floor((Math.random()*n));
}

function seekSize(src,dst){
  return (src / 2) + ((src / 2) * dst /100 );
}

function seekLength(src,dst){
  return src * (dst / 100);
}
