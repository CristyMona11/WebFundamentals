function newArray(arr){

  var numbersOnly = [];

  for(var i=0; i<arr.length; i++){
if ( arr[i] =="number"){
  numbersOnly.push [i];
}
}
return numbersOnly;
}
var ans = newArray();
console.log(ans);
