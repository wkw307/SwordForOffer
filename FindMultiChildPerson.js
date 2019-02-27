/**
 * 有一个祖先树状 json 对象，当一个人有一个儿子的时候，其 child 为其儿子对象，如果有多个儿子，child 为儿子对象的数组。
 * 请实现一个函数，找出这个家族中所有有多个儿子的人的名字（name），输出一个数组。
 */
// 样例数据
let data = {
  name: 'jack',
  child: [
    { name: 'jack1' },
    {
      name: 'jack2',
      child: [{
        name: 'jack2-1',
        child: { name: 'jack2-1-1' }
      }, {
        name: 'jack2-2'
      }]
    },
    {
      name: 'jack3',
      child: { name: 'jack3-1' }
    }
  ]
}

function func1(data){
  let nameList = [];

  function tmp(data){
    if(data.hasOwnProperty('child')){
      if(Array.isArray(data.child)){
        nameList.push(data.name);
        data.child.forEach(element => {
          tmp(element);
        });
      }else{
        tmp(data.child);
      }
    }
  }
  tmp(data);
  return nameList;
}

function func2(data){
  let dataList = [data];
  let nameList = [];

  while(dataList.length > 0){
    let curr = dataList.shift();
    if(curr.hasOwnProperty('child')){
      if(Array.isArray(curr.child)){
        nameList.push(curr.name);
        dataList = dataList.concat(curr.child);
      }else{
        dataList.push(curr.child);
      }
    }
  }
  return nameList;
}