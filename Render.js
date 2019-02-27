let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
};

// function render(template, data){
//   const reg = /{{(\w+)}}/;
//   if(reg.test(template)){
//     const name = reg.exec(template)[1];
//     template = template.replace(reg, data[name]);
//     return render(template, data);
//   }
//   return template;
// }

function render(template, data) {
  return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key) => data[key.trim()]);
}

console.log(render(template, data)); // 我是姓名，年龄18，性别undefined