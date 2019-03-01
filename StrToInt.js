function StrToInt(str)
{
  // write code here
  if(str === null || str.length === 0 || !(str[0] === '+' || str[0] === '-' || (str[0] >= '0' && str[0] <= '9'))) return 0;
  let num = 0;
  let flag = 1;
  if(str[0] === '-') flag = -1;
  for(let i = (str[0] === '+' || str[0] === '-' ? 1: 0); i < str.length; i++){
    let tmp = str[i];
    if(tmp > '9' || tmp < '0') return 0;
    num = num * 10 + parseInt(tmp);
  }
  return num * flag;
}