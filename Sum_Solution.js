function Sum_Solution(n)
{
  // write code here
  return (n > 0) && (n + Sum_Solution(n - 1)); 
}
console.log(Sum_Solution(4))