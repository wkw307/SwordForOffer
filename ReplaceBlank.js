/*
 * 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */
function replaceSpace(str)
{
    // write code here
    return str.replace(/\s/g,'%20');
}
function replaceSpace1(str){
    str1 = '';
    for(var i = 0;i<str.length;i++){
        if(str[i] == ' '){
            str1 += '%20';
        }else{
            str1 += str[i];
        }
    }
    return str1;
}
console.log(replaceSpace1('We Are Happy'));