document.getElementById("t1buy").addEventListener("click", function(x){
  cost1();
  if(player.x.lte(player.c1)){
      player.t1 += 1;
      player.x -= player.c1;
  }
})
  
function cost1(){
 ct1 = new Decimal(10);
 ct1 = ct1.mul((1.5).pow(player.t1));
 player.c1 = ct1;
}
