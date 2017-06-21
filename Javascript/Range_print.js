function printRange(start, end, skip){
  for(var i=start; i<end; i=i+skip){
    console.log(i);
  }
}
printRange(3,100,11);
