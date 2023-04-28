buyt1button = document.getElementById("t1buy")
buyt1button.innerHTML = player.c1.normify(0);

document.getElementById("t1buy").addEventListener("click", function(z){
  cost1();

  if(player.x.gte(player.c1)){
      player.t1 = player.t1.plus(1);
      player.x = player.x.minus(player.c1);
  }
  buyt1button.innerHTML = player.c1.normify(0);

})
  
function cost1(){
    player.c1 = new Decimal(10)
    console.log(player.c1, player.t1)
    player.c1 = player.c1.mul(Math.pow(1.5, player.t1)
    return player.c1
}

