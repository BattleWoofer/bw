
console.log("asa")

var player = {
    t1: 0,
    x: new Decimal(0)
};


setInterval(function(a){
    console.log("bleh")
    gain(0.1);
    document.getElementById("test").innerHTML = player.x.normify(2);
},100)

function gain(v){
    g = new Decimal(v)
    g = g.mul(player.t1)
    player.x = player.x.add(g)
}
