var player = {
    x: new Decimal(10),

    t1: 0,
    c1: new Decimal(10),

    t2: 0,
    c2: new Decimal(1000),
    p2: new Decimal(0),

    t3: 0,
    c3: new Decimal(1e6),
    p3: new Decimal(0),

    t4: 0,
    c4: new Decimal(1e10),
    p4: new Decimal(0),

};

console.log(player.x)
console.log(player.x.mul(15))

setInterval(function(a){
    texts();
    gain(0.033);
    gainp2(0.033);
    gainp3(0.033    )
    gainp4(0.033)
    document.getElementById("test").innerHTML = player.x.normify(2);
},33)

function gain(v){
    g = new Decimal(v)
    g = g.mul(player.t1)
    g = g.mul(t1Mult())
    player.x = player.x.plus(g)
}
function gainp2(v){
    g2 = new Decimal(v/4)
    g2 = g2.mul(player.t2)
    g2 = g2.mul(t2Mult())
    player.p2 = player.p2.plus(g2)
}
function gainp3(v){
    g3 = new Decimal(v/9)
    g3 = g3.mul(player.t3)
    g3 = g3.mul(t3Mult())
    player.p3 = player.p3.plus(g3)
}
function gainp4(v){
    g4 = new Decimal(v/16)
    g4 = g4.mul(player.t4)
    g4 = g4.mul(t4Mult())
    player.p4 = player.p4.plus(g4)
}

function texts(){
    document.getElementById("t1info").innerHTML = player.t1 + "(" + t1Mult().normify(2) + ")"
    document.getElementById("t2info").innerHTML = player.t2 + "(" + t2Mult().normify(2) + ") = √" + player.p2.normify(1)
    document.getElementById("t3info").innerHTML = player.t3 + "(" + t3Mult().normify(2) + ") = 3√" + player.p3.normify(1)
    document.getElementById("t4info").innerHTML = player.t4 + "(" + t4Mult().normify(2) + ") = 4√" + player.p4.normify(1)

}

function t1Mult(){
    m = new Decimal(1)
    m = m.mul(Math.pow(Math.pow(2, 1/8), player.t1))
        rlly = Math.max((player.p2.pow(0.5).toNumber()), 1)
    m = m.mul(rlly)    

    return m;
}
function t2Mult(){
    m2 = new Decimal(1)
    m2 = m2.mul(Math.pow(Math.pow(2, 1/8), 2 * (player.t2)))
        rlly2 = Math.max((player.p3.pow(1/3).toNumber()), 1)
    m2 = m2.mul(rlly2)    
    return m2;
}
function t3Mult(){
    m3 = new Decimal(1)
    m3 = m3.mul(Math.pow(Math.pow(2, 1/8), 4 * (player.t3)))
        rlly3 = Math.max((player.p3.pow(1/4).toNumber()), 1)
    m3 = m3.mul(rlly3)
    return m3;
}
function t4Mult(){
    m4 = new Decimal(1)
    m4 = m4.mul(Math.pow(Math.pow(2, 1/8), 8 * (player.t4)))
    return m4;
}