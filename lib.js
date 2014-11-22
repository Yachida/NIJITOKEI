$.ajaxSetup({ cache: false });

function padZero(n) {
  return (n < 10) ? '0'+n : n;
}

function seekSize(src,dst){
  return Math.round((src / 2) + ((src / 2) * dst /100 ));
}
