const nome = document.querySelector('#nome')
const nivel = document.querySelector('#nivel')
const especial = document.querySelector('#especial')
let tipo = ''
document.querySelector('#tipo').addEventListener('change', (ev) => {
    tipo = ev.currentTarget.value
})

const resultado = document.querySelector('#resultado')
const btnCriar = document.querySelector('#btn-criar')

btnCriar.addEventListener('click', () => {

    if(nome.value == '' || nivel.value == '' || especial.value == '' || tipo == '') {
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
    document.querySelector('#tipo').value = ''
})