const fieldText = document.querySelector('#item')
const btnAdd = document.querySelector('#btn-add')
const btnDel = document.querySelector('#btn-del')
const btnList = document.querySelector('#btn-list')
const listaDeItens = document.querySelector('#listaItens')


const inventario = []

btnAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.setAttribute('id', inventario.length)
    li.setAttribute('class', 'listas')
    listaDeItens.appendChild(li).textContent = fieldText.value
    
    inventario.push(fieldText.value)

    console.log(li) // teste
    console.log(inventario) // teste

    fieldText.value = ''
})

btnDel.addEventListener('click', () => {
    //delete item array
    let indice = inventario.indexOf(fieldText.value)
    inventario.splice(indice, 1)

    //delete lista
    let allLists = document.querySelectorAll('.listas')
    allLists.forEach(li => console.log(li.id -1))

    console.log(indice) //teste
    console.log(inventario)//teste
    console.log(allLists)//teste

    fieldText.value = ''
})

btnList.addEventListener('click', () => {
    console.log('Quero chocolate')
})