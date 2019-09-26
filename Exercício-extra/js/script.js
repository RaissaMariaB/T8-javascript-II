
const formulario = document.getElementById("formulario-de-comentarios")

let divMae = document.getElementById("todos-os-comentarios")

let erro = document.querySelector(".meu_erro")

//de todos os eventos que podem acontecer, nesse caso, eu escolho o submit, caso ele ocorra
// ele vcai ter uma fuction que é um ação que irá acontecer em seguida do eventos


formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    let input = document.getElementById("input-text")
    let mensagem = input.value
    if (mensagem.trim() == "" ){
        erro.textContent = "Por favor, insira um texto senhora!"

    } else { 
        erro.textContent = "" 
        let divComentario = document.createElement("p")
        divComentario.classList.add("comentario")
        divMae.appendChild (divComentario)
    divComentario.textContent = mensagem
    //input.value = ""
    formulario.reset()
}
} )





// para zerar o valor dos inputs do form chama o valor do input e atribui um valor de string vazio
//o submite tem um método que impede o comportamento padrão da página acontecer: preventDefault
// o quaeryselector captura tanto ID quanto Class
// o trim é um método de string que apara os espaços as bordas


//FORMA COM ALGUNS BUGS PARA APRENDER
 
// formulario.addEventListener("submit", function(evento){
//     evento.preventDefault()
//     let input = document.getElementById("input-text")
//     let mensagem = input.value
//     if (mensagem.trim() == "" ){
//         input.classList.add("comentario-invalido") 
//         let comentarioErrado = document.getElementById("formulario-de-comentarios")
//         let naoValeu = document.createElement ('p')
//         comentarioErrado.appendChild (naoValeu)
//         naoValeu.textContent = "Por favor, insira um texto!"

//     } else {   
//         let divComentario = document.createElement("p")
//         divComentario.classList.add("comentario")
//         divMae.appendChild (divComentario)
//     divComentario.textContent = mensagem
//     //input.value = ""
//     formulario.reset()
//     }
// } )


