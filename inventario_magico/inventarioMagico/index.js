const fieldText = document.querySelector('#item')
const btnAdd = document.querySelector('#btn-add')
const btnDel = document.querySelector('#btn-del')
const btnClear = document.querySelector('#btn-clear')
const listaDeItens = document.querySelector('#listaItens')

const inventario = []

btnAdd.addEventListener('click', () => {

    if (fieldText.value == '') {
        alert('Preencha o nome do item primeiro')

    } else if (inventario.includes(fieldText.value)) {
        alert('Esse item ja existe na lista')

    } else {
        const li = document.createElement('li')
        li.setAttribute('class', 'listas')
        listaDeItens.appendChild(li).textContent = fieldText.value
        inventario.push(li.textContent)
    }

    fieldText.value = ''
    fieldText.focus()
})

btnDel.addEventListener('click', () => {

    if (fieldText.value == '') {
        alert('Preencha o nome do item primeiro')

    } else if (!inventario.includes(fieldText.value)) {
        alert('Esse item não ja existe na lista para ser excluído')

    } else {
        //delete item array
        let indice = inventario.indexOf(fieldText.value)
        inventario.splice(indice, 1)

        //delete item lista
        let allLists = document.querySelectorAll('.listas')
        allLists.forEach(li => {
            if (li.textContent == fieldText.value) {
                li.remove()
            }
        })
    }

    fieldText.value = ''
    fieldText.focus()
})

btnClear.addEventListener('click', () => {
    inventario.length = ''

    let allLists = document.querySelectorAll('.listas')
        allLists.forEach(li => {
            li.remove()
        })

    fieldText.focus()
})