//s字符串
// A[.[B]][e|EC] .B[e|EC]
function isNumeric(s)
{
    // write code here
    var numReg = /^[+-]?((\d+((\.\d+)?([eE]([+-]?)\d+)?)?)|(\.\d+([eE]([+-]?)\d+)?))$/;
    return numReg.test(s);
}
console.log(isNumeric('0000'));