
console.log("asa")

var x = new Decimal(0);
var player = {
    t1: 0,
};


setInterval(function(a){
    console.log("bleh")
    gain(0.1);
    document.getElementById("test").innerHTML = x.normify(2);
},100)

function gain(v){
    g = new Decimal(v)
    g = g.mul(player.t1)
    x = x.add(g)
}