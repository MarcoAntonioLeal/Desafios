const fieldText = document.querySelector('#item')
const btnAdd = document.querySelector('#btn-add')
const btnDel = document.querySelector('#btn-del')
const btnList = document.querySelector('#btn-list')
const listaDeItens = document.querySelector('#listaItens')

const inventario = []



btnAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.setAttribute('id', fieldText.value)//tem de ser o index e não o nome
    listaDeItens.appendChild(li).textContent = fieldText.value
    
    inventario.push(fieldText.value)

    console.log(li) // teste
    console.log(inventario) // teste
    fieldText.value = ''
})

btnDel.addEventListener('click', () => {
    console.log('Mozinho Lindo') /*lembrar que o id da lista será o indexof() -1 */
})

btnList.addEventListener('click', () => {
    console.log('Quero chocolate')
})

