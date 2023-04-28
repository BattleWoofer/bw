var player = {
    t1: 0,
    c1: new Decimal(10),
    x: new Decimal(10)
};

console.log(player.x)
console.log(player.x.mul(15))

setInterval(function(a){
    gain(0.1);
    document.getElementById("test").innerHTML = player.x.normify(2);
},100)

function gain(v){
    g = new Decimal(v)
    g = g.mul(player.t1)
    player.x = player.x.plus(g)
}
