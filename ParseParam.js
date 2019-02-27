let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

function parseParam(url){
  const paramsStr = /.+\?(.+)/.exec(url)[1];
  const paramsArr = paramsStr.split('&');
  let paramsObj = {};
  paramsArr.forEach(param => {
    if(/=/.test(param)){
      let [key, val] = param.split('=');
      val = decodeURIComponent(val);
      val = /^\d+$/.test(val) ? parseInt(val) : val;

      if(paramsObj.hasOwnProperty(key)){
        paramsObj[key] = [].concat(paramsObj[key], val);
      } 
      else{
        paramsObj[key] = val;
      }
    }
    else{
      paramsObj[param] = true;
    }
  });
  return paramsObj;
}

console.log(parseParam(url));