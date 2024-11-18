/*
let vida = 100;
let quemado = false
let enverenado = false
const POCIO = 20;
const FENIX = 50;

function mostraVida(){

    if(vida == 0){
        alert("Estas mort pringat")
    }
    
    alert("La vida que tens és " + vida)

}

function atac(){

    let torn = Math.floor(Math.random()*3);
    if(torn == 0){
         atacEnemic("Atac Bàsic");
    }
    else if(torn == 1){
        atacEnemic("Bolla de foc");
    }
    else if(torn == 2){
        atacEnemic("Àcid sulfúric");
    }
}
function atacEnemic(atac){

    if(vida <= 0){
        alert("No te poden atacar perquè estas mort")
    }
    else{
        if(atac == "Atac Bàsic"){
            daño = 10
        }
        else if(atac == "Bolla de foc"){
            daño = 10
            quemado = true
        }
        else if(atac == "Àcid sulfúric"){
            daño = 10
            enverenado = true
        }
        vida -= daño
        alert("El teu enemic t'ha atacat  " +atac)
        if(vida <= 0){
            vida = 0
            alert("T'acaben de matar")
        }
        else{
        alert("La vida que tens és " + vida)
        }
    }
}
function beurePocio(){
    if(vida >= 100){
        alert("La poció no funciona tens la vida máxima")
    }
    else if(vida == 90){
        vida += 10;
        alert("Acabes de beure un chupito")
        alert("La vida que tens és " + vida)
    }
    else if(vida <= 0){
        alert("No pots perque estas mort tonto")
    }
    else{
        vida += poció
        alert("Acabes de beure una poció")
        alert("La teva vida és: " + vida)
    }
}
function colaFenix(){
    if(vida <= 0){
        vida += fenix;
        alert("Acabes d'utilitzar la cola de Fénix")
        alert("La teva vida és: " + vida)   
    }
    else{
        alert("No la pots utilitzar perquè estas viu")
    }
}
function antiquemado(){
    if(quemado == false){
        alert("No pots perque no estas quremat")
    }
    else if(quremat == true){

    }
}
function antienvenenado(){  
    if(quemado == false){
        alert("No pots perque no estas quremat")
    }
    else if(quremat == true){

    }  
}
/*/
function conta100(){
    let num1 = parseInt(prompt("Digues un num"))
    let num2 = parseInt(prompt("Digues un altre num"))

    if(num1 > num2){
    for(let c = num1; c >= num2; c--){
        console.log(c)
    }
}
 
else{
for(let c = num1; c <= num2; c++){
        console.log(c)
    }
} 

}   