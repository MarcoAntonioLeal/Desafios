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
    class monstro {
        constructor() {

        }
    }
})