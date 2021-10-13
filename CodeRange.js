// 10/12/21 Emily S. & Immanuel M
let x = [1,4,11,2,37,-4]

let max = x [0]
let min = x [0]

for (let i=0; i<x.length; i++){
if (x [i] >= max) {
  max = x [i];
}
if (x [i] <= min){
  min = x [i];
}
}
console.log(min+",",max);