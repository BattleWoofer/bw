buyt1button = document.getElementById("t1buy")
buyt2button = document.getElementById("t2buy")
buyt3button = document.getElementById("t3buy")
buyt4button = document.getElementById("t4buy")

buyt1button.innerHTML = player.c1.normify(0);
buyt2button.innerHTML = player.c2.normify(0);
buyt3button.innerHTML = player.c3.normify(0);
buyt4button.innerHTML = player.c4.normify(0);


document.getElementById("t1buy").addEventListener("click", function(z){
  cost1();

  if(player.x.gte(player.c1)){
      player.t1 += 1;
      player.x = player.x.minus(player.c1);
      cost1();
      buyt1button.innerHTML = player.c1.normify(1);
  }

})
  
function cost1(){
    player.c1 = new Decimal(10)
    player.c1 = player.c1.mul(Math.pow(Math.pow(10, 1/8), player.t1))
    buyt1button.innerHTML = player.c1.normify(0);
    return player.c1;
}
function cost2(){
  player.c2 = new Decimal(1000)
  player.c2 = player.c2.mul(Math.pow(Math.pow(10, 1/4), player.t2))
  return player.c2
}
function cost3(){
    player.c3 = new Decimal(1e6)
    player.c3 = player.c3.mul(Math.pow(Math.pow(10,1/2), player.t3))
    return player.c3
}
function cost4(){
  player.c4 = new Decimal(1e10)
  player.c4 = player.c4.mul(Math.pow(10, player.t4))
  return player.c4
}


document.getElementById("t2buy").addEventListener("click", function(z){
  cost2();

  if(player.x.gte(player.c2)){
      player.t2 += 1;
      player.x = player.x.minus(player.c2);
      cost2();
      buyt2button.innerHTML = player.c2.normify(1);
  }
})
document.getElementById("t3buy").addEventListener("click", function(z){
  cost3();

  if(player.x.gte(player.c3)){
      player.t3 += 1;
      player.x = player.x.minus(player.c3);
      cost3();
      buyt3button.innerHTML = player.c3.normify(1);
  }
})
document.getElementById("t4buy").addEventListener("click", function(z){
  cost4();

  if(player.x.gte(player.c4)){
      player.t4 += 1;
      player.x = player.x.minus(player.c4);
      cost4();
      buyt4button.innerHTML = player.c4.normify(1);
  }
})

