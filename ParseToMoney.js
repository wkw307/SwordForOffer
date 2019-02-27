// 保留三位小数，并以逗号分割
function parseToMoney(num){
  num = parseFloat(num.toFixed(3));
  let [integer, decimal] = String.prototype.split.call(num, '.');
  // integer = integer.replace(/\d(\d{3})*$/g,'$&,');
  integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
  return integer + '.' + (decimal ? decimal : '');
}

// parseToMoney(1234.56); // return '1,234.56'
// parseToMoney(123456789); // return '123,456,789'
// parseToMoney(1087654.321); // return '1,087,654.321'
