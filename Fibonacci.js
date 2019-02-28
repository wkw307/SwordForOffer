// n <= 39
let f = [];

(function(){
  if(f.length !== 0){
    return;
  }
  f.push(0);
  f.push(1);
  f.push(1);
  for(let i = 3; i < 40; i++){
    f.push(f[i-1] + f[i-2]);
  }
})();

function Fibonacci(n)
{
  // write code here
  return f[n];
}

function f2(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  a2 = [];
  a2.push(0);
  a2.push(1);
  for(let i = 2; i < n + 1; i++){
    a2.push(a2[i-1]+a2[i-2]);
  }
  return a2[n];
}

