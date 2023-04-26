
console.log("asa")

var player = {
    t1: new Decimal(0),
    c1: new Decimal(10),
    x: new Decimal(10)
};


setInterval(function(a){
    gain(0.1);
    document.getElementById("test").innerHTML = player.t1.normify(2);
},100)

function gain(v){
    g = new Decimal(v)
    g = g.mul(player.t1)
   // player.t1 = player.t1.plus(g)
}
