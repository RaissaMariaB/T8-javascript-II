
const formulario = document.getElementById("formulario-de-comentarios")


//de todos os eventos que podem acontecer, nesse caso, eu escolho o submit, que caso ele ocorra
// ele vcai ter uma fuction que é um ação que irá acontecer em seguida do eventos


formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    let input = document.getElementById("input-text")
    let mensagem = input.value
    let divMae = document.getElementById("todos-os-comentarios")
    let divComentario = document.createElement("p")
    divComentario.classList.add("comentario")
    divMae.appendChild (divComentario)
    divComentario.textContent = mensagem
    
    
} )

//o submite tem um método que impede o comportamento padrão da página acontecer: preventDefault
// o quaeryselector captura tanto ID quanto Class

