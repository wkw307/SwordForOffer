a='34';b='1234567'; // 返回 2
a='35';b='1234567'; // 返回 -1
a='355';b='12354355'; // 返回 5

function isContain(a,b){
  for(let i in b){
    if(a[0] === b[i]){
      let tmp = true;
      for(let j in a){
        // console.log(typeof i)
        // console.log(j)
        if(a[j] !== b[~~i+~~j]){
          tmp = false;
        }
      }
      if(tmp){
        return i;
      }
    }
  }  
  return -1;
}
console.log(isContain('34','12345678'));
