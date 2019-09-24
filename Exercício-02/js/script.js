
//fazer cada cada sumir de com clique em cima dele

//chamo, miro o elemento que eu vou guardar e mexer na minha gaveta

<<<<<<< HEAD
const muitosGatos = document.querySelectorAll(".item__imagem")

 for( let i=0; i<muitosGatos.length; i++){
     muitosGatos[i].addEventListener("click", function(){
         muitosGatos[i].classList.add("gatoInvisivel")
         if 
        

     })
 }

 for( let i=0; i<muitosGatos.length; i++){
     muitosGatos[i].addEventListener("dblclick", function(){
         console.log(muitosGatos[i])
         muitosGatos[i].classList.remove("gatoInvisivel")
       

     })
 }
// ou essa resposta

for( let i=0; i<muitosGatos.length; i++){
    muitosGatos[i].addEventListener("click", function(){     
        if (muitosGatos[i].classList.contains("gatoInvisivel") ==true) {
            muitosGatos[i].classList.remove("gatoInvisivel") ;
        }   else {
            muitosGatos[i].classList.add("gatoInvisivel");
        }
    })
}
=======
let muitosGatos = document.querySelectorAll(".item__imagem")

for( let i=0; i<muitosGatos.length; i++){
    muitosGatos[i].addEventListener("click", function(){
    muitosGatos[i].classList.add("gatoInvisivel")

    })
}



>>>>>>> 78383d3259a282668bb9a262127d566be8167c64

//ao clicar no gato vou colocar a função de 


<<<<<<< HEAD
=======




>>>>>>> 78383d3259a282668bb9a262127d566be8167c64
