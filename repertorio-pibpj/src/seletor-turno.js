
export function opcoesDeTurnos() {
   
    //resgata o select dos turnos
    const selectTurnos = document.getElementById("seletor-turno")
    //coloca o valor do select na variavel
    const turnosValue = selectTurnos.value
    //resgata a div das quantidades de músicas pelo id
    const divQuantidadeMusicas = document.getElementById("quantidade-de-musicas")
    //obtém a section das musicas pelo is
    const sectionMusicas = document.getElementById("musicas")
    
    //se colocar na opção selecionar, apaga tudo dentro da div
    if (turnosValue == 0) {       
        //apaga tudo dentro da div
        divQuantidadeMusicas.innerHTML = ""
    }

    //Se for selecionado o turno da manhã, aparecerá as opções relativas a esse turno
    if (turnosValue == 1) {
        //apaga tudo dentro da div
        divQuantidadeMusicas.innerHTML = ""

        //cria um h2 "Quantidade de Músicas" na div
        divQuantidadeMusicas.innerHTML += `<h2>Quantidade de Músicas</h2>`

        //cria um h3 "Manhã" na div
        divQuantidadeMusicas.innerHTML += `<h3>Manhã</h3>`

        //cria o seletor de quantidade da manhã
        const quantidadeManha = document.createElement("select")
        quantidadeManha.setAttribute('name', 'quantidade-manha')
        quantidadeManha.setAttribute('id', 'quantidade-manha')
        divQuantidadeMusicas.appendChild(quantidadeManha)

        //cria as options do seletor da manhã
        const criaOption1 = document.createElement("option")
        criaOption1.setAttribute('value', '0')
        criaOption1.innerText = "Selecionar"

        const criaOption2 = document.createElement("option")
        criaOption2.setAttribute('value', '1')
        criaOption2.innerText = "1"

        const criaOption3 = document.createElement("option")
        criaOption3.setAttribute('value', '2')
        criaOption3.innerText = "2"

        const criaOption4 = document.createElement("option")
        criaOption4.setAttribute('value', '3')
        criaOption4.innerText = "3"

        const criaOption5 = document.createElement("option")
        criaOption5.setAttribute('value', '4')
        criaOption5.innerText = "4"

        //coloca as options dentro do seletor da manhã
        const seletorManha = document.getElementById("quantidade-manha")        
        seletorManha.appendChild(criaOption1)
        seletorManha.appendChild(criaOption2)
        seletorManha.appendChild(criaOption3)
        seletorManha.appendChild(criaOption4)
        seletorManha.appendChild(criaOption5)

        //Quando o seletor de quantidade mudar, executará funções
        seletorManha.addEventListener('change', () => {
            
        })

    }

    //Se for selecionado o turno da noite, aparecerá as opções relativas a esse turno
    if (turnosValue == 2) {        
        //apaga tudo dentro da div
        divQuantidadeMusicas.innerHTML = ""
         
        //cria um h2 "Quantidade de Músicas" na div
        divQuantidadeMusicas.innerHTML += `<h2>Quantidade de Músicas</h2>`

        //cria um h3 "Noite" na div
        divQuantidadeMusicas.innerHTML += `<h3>Noite</h3>`

        //cria o seletor de quantidade da noite
        const quantidadeNoite = document.createElement("select")
        quantidadeNoite.setAttribute('name', 'quantidade-noite')
        quantidadeNoite.setAttribute('id', 'quantidade-noite')
        divQuantidadeMusicas.appendChild(quantidadeNoite)

        //cria as options do seletor da noite
        const criaOption1 = document.createElement("option")
        criaOption1.setAttribute('value', '0')
        criaOption1.innerText = "Selecionar"

        const criaOption2 = document.createElement("option")
        criaOption2.setAttribute('value', '1')
        criaOption2.innerText = "1"

        const criaOption3 = document.createElement("option")
        criaOption3.setAttribute('value', '2')
        criaOption3.innerText = "2"

        const criaOption4 = document.createElement("option")
        criaOption4.setAttribute('value', '3')
        criaOption4.innerText = "3"

        const criaOption5 = document.createElement("option")
        criaOption5.setAttribute('value', '4')
        criaOption5.innerText = "4"

        //coloca as options dentro do seletor da noite
        const seletorNoite = document.getElementById("quantidade-noite")        
        seletorNoite.appendChild(criaOption1)
        seletorNoite.appendChild(criaOption2)
        seletorNoite.appendChild(criaOption3)
        seletorNoite.appendChild(criaOption4)
        seletorNoite.appendChild(criaOption5)
    }

    //Se for selecionado Ambos os turnos, aparecerá as opções relativas aos dois turnos
    if (turnosValue == 3) {        
        //apaga tudo dentro da div
        divQuantidadeMusicas.innerHTML = ""
         
        //cria um h2 "Quantidade de Músicas" na div
        divQuantidadeMusicas.innerHTML += `<h2>Quantidade de Músicas</h2>`

        //cria um h3 "Manhã" na div
        divQuantidadeMusicas.innerHTML += `<h3>Manhã</h3>`

        //cria o seletor de quantidade da manhã
        const quantidadeManha = document.createElement("select")
        quantidadeManha.setAttribute('name', 'quantidade-manha')
        quantidadeManha.setAttribute('id', 'quantidade-manha')
        divQuantidadeMusicas.appendChild(quantidadeManha)

        //cria as options do seletor da manhã
        const criaOption1 = document.createElement("option")
        criaOption1.setAttribute('value', '0')
        criaOption1.innerText = "Selecionar"

        const criaOption2 = document.createElement("option")
        criaOption2.setAttribute('value', '1')
        criaOption2.innerText = "1"

        const criaOption3 = document.createElement("option")
        criaOption3.setAttribute('value', '2')
        criaOption3.innerText = "2"

        const criaOption4 = document.createElement("option")
        criaOption4.setAttribute('value', '3')
        criaOption4.innerText = "3"

        const criaOption5 = document.createElement("option")
        criaOption5.setAttribute('value', '4')
        criaOption5.innerText = "4"

        //coloca as options dentro do seletor da manhã
        const seletorManha = document.getElementById("quantidade-manha")        
        seletorManha.appendChild(criaOption1)
        seletorManha.appendChild(criaOption2)
        seletorManha.appendChild(criaOption3)
        seletorManha.appendChild(criaOption4)
        seletorManha.appendChild(criaOption5)

        //cria um h3 "Noite" na div
        divQuantidadeMusicas.innerHTML += `<h3>Noite</h3>`

        //cria o seletor de quantidade da noite
        const quantidadeNoite = document.createElement("select")
        quantidadeNoite.setAttribute('name', 'quantidade-noite')
        quantidadeNoite.setAttribute('id', 'quantidade-noite')
        divQuantidadeMusicas.appendChild(quantidadeNoite)

        //cria as options do seletor da noite
        const criaOption6 = document.createElement("option")
        criaOption6.setAttribute('value', '0')
        criaOption6.innerText = "Selecionar"

        const criaOption7 = document.createElement("option")
        criaOption7.setAttribute('value', '1')
        criaOption7.innerText = "1"

        const criaOption8 = document.createElement("option")
        criaOption8.setAttribute('value', '2')
        criaOption8.innerText = "2"

        const criaOption9 = document.createElement("option")
        criaOption9.setAttribute('value', '3')
        criaOption9.innerText = "3"

        const criaOption10 = document.createElement("option")
        criaOption10.setAttribute('value', '4')
        criaOption10.innerText = "4"

        //coloca as options dentro do seletor da noite
        const seletorNoite = document.getElementById("quantidade-noite")        
        seletorNoite.appendChild(criaOption6)
        seletorNoite.appendChild(criaOption7)
        seletorNoite.appendChild(criaOption8)
        seletorNoite.appendChild(criaOption9)
        seletorNoite.appendChild(criaOption10)
    }
}