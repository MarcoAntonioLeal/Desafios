const nome = document.querySelector('#nome')
const nivel = document.querySelector('#nivel')
const resultado = document.querySelector('#resultado')

let elemento = ''
document.querySelector('#elemento').addEventListener('change', (ev) => {
    elemento = ev.currentTarget.value
})

/*let habilidade = ''
document.querySelector('#habilidade').addEventListener('', (ev) => {
    habilidade = ev.currentTarget.value
    resultado.textContent = 'oi'
})*/

document.querySelector('#habilidade').addEventListener('input', (ev) => {
    console.log(ev.currentTarget.value)
})

document.querySelector('#habilidade').addEventListener('change', (ev) => {
    console.log(ev.currentTarget.value)
})

const btnCriar = document.querySelector('#btn-criar')

btnCriar.addEventListener('click', () => {

    /*if(nome.value == '' || nivel.value == '' || especial.value == '' || tipo == '') {
        alert('Todos os campos tem de ser preenchidos')
    } else if (nivel.value < 50 || nivel.value > 200) {
        alert('Valores do nível tem de ser maior que 50 e menor que 200')
    } else {
        class monstro {
            constructor() {
                this.nome = nome.value
                this.nivel = nivel.value
                this.especial = especial.value
                this.tipo = tipo
            }
        }
    
        let novoMonstro = new monstro(nome, tipo, nivel, especial)
            
        resultado.innerHTML += `
        O monstro ${novoMonstro.nome} é um ${novoMonstro.tipo} de nível ${novoMonstro.nivel} e possui a habilidade especial: ${novoMonstro.especial} 
        <br>`
    }

    nome.value = ''
    nivel.value = ''
    especial.value = ''
    document.querySelector('#tipo').value = ''*/

    console.log(nome.value)
    console.log(nivel.value)
    console.log(elemento)
    console.log(habilidade)
})

/*Habilidades de Combate:
Mestre em Espada: Habilidade em combate com espadas e outras armas brancas.
Arco e Flecha: Competência em usar arcos e flechas para ataques à distância.
Furtividade: Capacidade de se mover despercebido, útil para emboscadas e infiltração.
Ladino: Habilidade em arrombar fechaduras, destreza manual e roubo.
Tática: Conhecimento de estratégias e formações para combate. 
Habilidades Mágicas:
Mestre em Magia: Capacidade de manipular energias mágicas para diversos fins.
Feitiçaria: Utilização de artes arcanas, incluindo invocações e manipulação de forças sobrenaturais.
Alquimia: Criação de poções e itens mágicos.
Encantamento: Infusão de propriedades mágicas em objetos.
Divinação: Habilidade de prever o futuro ou obter conhecimento oculto.*/ 