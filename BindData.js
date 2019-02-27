// 实现一个方法，可以给 obj 所有的属性添加动态绑定事件，当属性值发生变化时会触发事件
function bindData(obj, fn) {
  for (let key in obj) {
    if(obj.hasOwnProperty(key)){
      let _value = obj[key];
      Object.defineProperty(obj, key, {
        enumerable: true,
        set(newVal) {
          if (_value !== newVal) {
            _value = newVal;
            fn.call(obj, key);
          }
        },
        get() {
          return _value;
        }
      });
    }
  }
}

var obj = {
  key_1: 1,
  key_2: 2
}
function func(key) {
  console.log(key + ' 的值发生改变：' + this[key]);
}
bindData(obj, func);
// obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
// obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"
console.log(obj)
for(let key in obj){
  console.log(key)
}