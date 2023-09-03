//obtém a section das musicas pelo is
const sectionMusicas = document.getElementById("musicas")



function musicasManha() {

    //resgata o select da quantidade da manhã
    const seletorManha = document.getElementById("quantidade-manha")
    //coloca o valor do select na variavel
    const manhaValue = seletorManha.value
    let contadorManha = 1

    //limpar a section das musicas
    sectionMusicas.innerHTML = ""

    //cria um h2 "Quantidade de Músicas" na div
    sectionMusicas.innerHTML += `<h2>Quantidade de Músicas</h2>`

    while (contadorManha <= manhaValue){

        
    }


}



function criarMusicas() {

}