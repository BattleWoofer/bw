document.getElementById("t1buy").addEventListener("click", function(z){
  cost1();
  if(player.x.lte(player.c1)){
      player.t1 += 1;
      player.t1 -= player.c1;
  }
})
  
function cost1(){
 ct1 = new Decimal(10);
 ct1 = ct1.mul((new Decimal(1.5)).pow(player.t1));
 ct1 = ct1.mul(Math.pow(1.5, player.t1))
 player.c1 = ct1;
}
