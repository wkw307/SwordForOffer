function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(numbers === null) return 0;
    let tmp = [0,0];
    for(let i = 0; i < numbers.length; i++){
      if(tmp[0] === 0 || tmp[1] === 0){
        tmp[0] = numbers[i];
        tmp[1] = 1;
      }else if(tmp[0] === numbers[i]){
        tmp[1] ++;
      }else if(tmp[0] !== numbers[i]){
        tmp[1] --;
      }
    }
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
      if(tmp[0] == numbers[i]){
        sum ++;
      }
    }
    if(sum * 2 > numbers.length) return tmp[0];
    return 0;
}
console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));