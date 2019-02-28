let maxHeap = [];
let minHeap = [];
function Insert(num)
{
  // write code here
  let sum = maxHeap.length + minHeap.length;
  if((sum & 1) === 0){
    maxHeap.push(num);
    maxHeapify(maxHeap);
    let max = maxHeap.shift();
    minHeap.push(max);
  }else{
    minHeap.push(num);
    minHeapify(minHeap);
    let min = minHeap.shift();
    maxHeap.push(min);
  }
}
function GetMedian(){
  // write code here
  let sum = maxHeap.length + minHeap.length;
  maxHeapify(maxHeap);
  minHeapify(minHeap);
  if((sum & 1) === 0){
    return (maxHeap[0] + minHeap[0])/2;
  }else{
    return minHeap[0];
  }
}
function maxHeapify(maxHeap){
  for(let i = maxHeap.length; i > 0; i--){
    if(maxHeap[i] > maxHeap[parseInt((i-1)/2)]){
      let tmp = maxHeap[i];
      maxHeap[i] = maxHeap[parseInt((i-1)/2)];
      maxHeap[parseInt((i-1)/2)] = tmp;
    }
  }
}
function minHeapify(minHeap){
  for(let i = minHeap.length; i > 0; i--){
    if(minHeap[i] < minHeap[parseInt((i-1)/2)]){
      let tmp = minHeap[i];
      minHeap[i] = minHeap[parseInt((i-1)/2)];
      minHeap[parseInt((i-1)/2)] = tmp;
    }
  }
  
}