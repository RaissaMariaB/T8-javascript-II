// ciar elementos dessa lista pelo js para o html

const alunas = ["Simara", "lia", "aline", "bah", "thais", "dry", "manu"]

// capturar ul do html - a div mãe - para isso se cria uma variável para guardar a div mãe, e usa-se o getElementBy

let divMae = document.getElementById("lista-alunas")

// * no meu petodo eu tenho que especificar qual, nesse caso era id; e o document é o acesso ao DOM - documet. *


//percorrer array

for (i=0; i<alunas.length; i++){ // dentro do proprio for você pode criar a propria 
    //cria os itens da lista pq eu vou atribuir eles ao html
    let itemLista = document.createElement("li")
    //colaca conteudo dentro da lista
    itemLista.textContent = alunas[i]
    //eu to criando conteudo para lista e atribuindo a conteudo , de cada item ja existente da variável array
    divMae.appendChild(itemLista)
    //chamamos a let que esta guardando a div mae e botamos uma funcao a ela - metodo - e linka com o filho
    
}

// contando cliques no título

//mirar a tag e capturar o valor - o querySelector pega o primeiro item dentro daquela classe chamada
let meuTitulo = document.querySelector(".titulo")
//escutar o evento no elemento
let soma = 0

meuTitulo.addEventListener("click", function logar(){ 
    console.log(soma = soma++)
})
// quando existe uma função dentro de outra função é chama de callback, seja ela criada dentro do parâmetro ou fora
// e colocada pra dentro dela
//no evento que irá ocorrer eu preciso colocar dentro do parâmetro oq eu quero que ocorra, exite documentação de 
// opções


<<<<<<< HEAD
//criando um objeto


const raissa = {
    "idade"= 27,
    "formação" = "bióloga"

}


raissa.hobbies = "dançar"

raissa.jogar = function(){
    console.log ("cabelo chacheado")
}
=======
>>>>>>> 78383d3259a282668bb9a262127d566be8167c64





