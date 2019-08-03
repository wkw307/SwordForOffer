const map = {
  ONE: 'I',
  FIVE: 'V',
  TEN: 'X',
  FIFTY: 'L',
  HUNDRED: 'C',
  FIVEHUNDRED: 'D',
  THOUSAND: 'M',
  FOUR: 'IV',
  NINE: 'IX',
  FORTY: 'XL',
  NINTY: 'XC',
  FOURHUNDRED: 'CD',
  NINEHUNDRED: 'CM',
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let thousandCount = Math.floor(num / 1000);
  let remaining = num % 1000;
  let nineHundredFlag = false;
  let fiveHundredFlag = false;
  let fourHundredFlag = false;
  let nintyFlag = false;
  let fiftyFlag = false;
  let fortyFlag = false;
  let nineFlag = false;
  let fiveFlag = false;
  let fourFlag = false;
  if (remaining >= 900) {
    remaining -= 900;
    nineHundredFlag = true;
  }
  if (remaining >= 500) {
    remaining -= 500;
    fiveHundredFlag = true;
  }
  if (remaining >= 400) {
    remaining -= 400;
    fourHundredFlag = true;
  }
  let hundredCount = Math.floor(remaining / 100);
  remaining = remaining % 100;
  if (remaining >= 90) {
    remaining -= 90;
    nintyFlag = true;
  }
  if (remaining >= 50) {
    remaining -= 50;
    fiftyFlag = true;
  }
  if (remaining >= 40) {
    remaining -= 40;
    fortyFlag = true;
  }
  let tenCount = Math.floor(remaining / 10);
  remaining = remaining % 10;
  console.log(remaining)
  if (remaining >= 9) {
    remaining -= 9;
    nineFlag = true;
  }
  if (remaining >= 5) {
    remaining -= 5;
    fiveFlag = true;
  }
  if (remaining >= 4) {
    remaining -= 4;
    fourFlag = true;
  }
  let oneCount = remaining;
  console.log(thousandCount, nineHundredFlag, fiveHundredFlag, fourHundredFlag, hundredCount, nintyFlag, fiftyFlag, fortyFlag, tenCount, nineFlag, fiveFlag, fourFlag, oneCount);
  return `${generateRomanString(thousandCount, map.THOUSAND)}${nineHundredFlag ? map.NINEHUNDRED : ''}${fiveHundredFlag ? map.FIVEHUNDRED : ''}${fourHundredFlag ? map.FOURHUNDRED : ''}${generateRomanString(hundredCount, map.HUNDRED)}${nintyFlag ? map.NINTY : ''}${fiftyFlag ? map.FIFTY : ''}${fortyFlag ? map.FORTY : ''}${generateRomanString(tenCount, map.TEN)}${nineFlag ? map.NINE : ''}${fiveFlag ? map.FIVE : ''}${fourFlag ? map.FOUR : ''}${generateRomanString(oneCount, map.ONE)}`;
};

function generateRomanString(num, str) {
  let result = '';
  for (let i = 0; i < num; i ++) {
    result += str;
  }
  return result;
}

console.log(intToRoman(401))
// console.log(generateRomanString(10, 'I'));

var intToRoman2 = function(num) {
  let map=new Map(), res="";
  map.set(1000, 'M');
  map.set(900, 'CM');
  map.set(500, 'D');
  map.set(400, 'CD');
  map.set(100, 'C');
  map.set(90, 'XC');
  map.set(50, 'L');
  map.set(40, 'XL');
  map.set(10, 'X');
  map.set(9, 'IX');
  map.set(5, 'V');
  map.set(4, 'IV');
  map.set(1, 'I');
  let keys= Array.from(map.keys());
  let len=keys.length;
  for(let i=0; i<len; i++){
      while(num>=keys[i]){
          num-= keys[i];
          res+= map.get(keys[i]);
      }
  }
  return res.toString();
};