const fieldText = document.querySelector('#item')
const btnAdd = document.querySelector('#btn-add')
const btnDel = document.querySelector('#btn-del')
const btnList = document.querySelector('#btn-list')
const listaDeItens = document.querySelector('#listaItens')

const inventario = []



btnAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.setAttribute('class', 'listas')

    if(fieldText.value == '') {
    console.log('oi')
    }

    listaDeItens.appendChild(li).textContent = fieldText.value
    inventario.push(li.textContent)

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
    allLists.forEach(li => {
        if(li.textContent == fieldText.value) {
            li.remove()
        }
    })

    console.log(inventario)//teste
    console.log(listaDeItens)//teste

    fieldText.value = ''
})

btnList.addEventListener('click', () => {
    console.log('Quero chocolate')
})