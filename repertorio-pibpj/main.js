import { opcoesDeTurnos } from "./src/seletor-turno"

//obtém o seletor de eventos pelo id
const seletorEvento = document.getElementById("seletor-evento")      
//obtém a section dos removíveis pelo is
const sectionRemoviveis = document.getElementById("removiveis")
//obtém a section das musicas pelo is
const sectionMusicas = document.getElementById("musicas")

seletorEvento.addEventListener('change', () => {
    //atribui a uma variável o valor do seletor de eventos
    const seletorEventoValue = seletorEvento.value
    
    //Se o seletor de evento estiver em "Selecionar"
    if (seletorEventoValue == 0) {
        //apaga tudo dentro da section
        sectionRemoviveis.innerHTML = ""
    }

    //Se o evento for um Culto Público
    if (seletorEventoValue == 1) {
        //apaga tudo dentro da section
        sectionRemoviveis.innerHTML = ""

        //cria a o seletor de turnos dentro da section removiveis
        const criaSeletorTurno = document.createElement("select")
        criaSeletorTurno.setAttribute('name', 'seletor-turno')
        criaSeletorTurno.setAttribute('id', 'seletor-turno')
        sectionRemoviveis.appendChild(criaSeletorTurno)

        //cria as opções do seletor de turno
        const criaOption1 = document.createElement("option")
        criaOption1.setAttribute('value', '0')
        criaOption1.innerText = "Selecionar"

        const criaOption2 = document.createElement("option")
        criaOption2.setAttribute('value', '1')
        criaOption2.innerText = "Manhã"

        const criaOption3 = document.createElement("option")
        criaOption3.setAttribute('value', '2')
        criaOption3.innerText = "Noite"

        const criaOption4 = document.createElement("option")
        criaOption4.setAttribute('value', '3')
        criaOption4.innerText = "Ambos"

        // coloca os options sento do select
        const selectTurnos = document.getElementById("seletor-turno")        
        selectTurnos.appendChild(criaOption1)
        selectTurnos.appendChild(criaOption2)
        selectTurnos.appendChild(criaOption3)
        selectTurnos.appendChild(criaOption4)
        
        //Cria uma Div dentro da section removiveis
        const criarDivTurnos = document.createElement("Div")
        criarDivTurnos.setAttribute('id', 'quantidade-de-musicas')
        sectionRemoviveis.appendChild(criarDivTurnos)

        //Quando o seletor de turnos mudar, executará funções
        selectTurnos.addEventListener('change', () => {
            
            //chama a função opcoesDeTurnos
            opcoesDeTurnos() 
        })


    }

    //Se for Outro evento
    if (seletorEventoValue == 2){
        //apaga tudo dentro da section
        sectionRemoviveis.innerHTML = ""

        //cria um input para nomear o evento
        const criaInputNome = document.createElement("input")
        criaInputNome.setAttribute('type', 'text')
        criaInputNome.setAttribute('id', 'input-nome')
        sectionRemoviveis.appendChild(criaInputNome)
    }
})
