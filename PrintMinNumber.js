function PrintMinNumber(numbers)
{
  // write code here
  numbers.sort((a,b) =>{
    if(a.toString() + b.toString() < b.toString() + a.toString()){
      return -1;
    }else if(a.toString() + b.toString() === b.toString() + a.toString()){
      return 0;
    }else{
      return 1;
    }
  });
  return numbers.join('');
}