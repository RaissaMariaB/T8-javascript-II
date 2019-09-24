let pinguim = {
    "nome": "Gelinho",
    "idade": 8,
    "origem": "iglu 12, Polo-sul"
}

pinguim.andar = function(){
    console.log("andou")
}

pinguim.podeVoar = false

pinguim.voar = function(){
    if (pinguim.podeVoar === true){
        console.log("é mentira!")
    } else {
        console.log("Nop, ele nada bem!")
    }
}