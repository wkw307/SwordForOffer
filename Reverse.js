var reverse = function(x) {
  var rev = 0;
  var INT_MAX = Math.pow(2,31) - 1;
  var INT_MIN = Math.pow(2,31) * -1;
  while(x !== 0){
      var pop = x % 10;
      x = parseInt(x / 10);
      if(rev > INT_MAX/10 || (rev === INT_MAX/10 && pop > 7)) return 0;
      if(rev < INT_MIN/10 || (rev === INT_MIN/10 && pop < -8)) return 0;
      rev = rev * 10 + pop;
  }
  return rev;
};

console.log(reverse(1563847412))