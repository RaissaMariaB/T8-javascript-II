
//fazer cada cada sumir de com clique em cima dele

//chamo, miro o elemento que eu vou guardar e mexer na minha gaveta

let muitosGatos = document.querySelectorAll(".item__imagem")

for( let i=0; i<muitosGatos.length; i++){
    muitosGatos[i].addEventListener("click", function(){
    muitosGatos[i].classList.add("gatoInvisivel")

    })
}




//ao clicar no gato vou colocar a função de 






