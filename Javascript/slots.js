
function casino(qtr){
  var win = 11;
while(qtr>0){
  if (Math.floor(Math.random()*100) == win){
    var prize = Math.floor(Math.random()*50)+51;
    return(qtr + prize);
  }
  else{
    qtr--;
    if(qtr===0){
      return(0);
    }
  }
}
}
console.log(casino(100));
