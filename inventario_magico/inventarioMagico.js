const itensMagicos = []

function adicionarItem(addItem) {
    if(!itensMagicos.includes(addItem)) {
        itensMagicos.push(addItem)
        console.log(`${(addItem)} -> Item adicionado com sucesso`)
    } else {
        console.log('Esse item já foi adicionado')
    } 
}

function removerItem(removeItem) {
    const indice = itensMagicos.indexOf(removeItem)
    if(itensMagicos.length == '') {
        console.log('Inventário vazio')
    } else if (!itensMagicos.includes(removeItem)) {
        console.log('Não existe esse item para ser removido')
    } else {
        itensMagicos.splice(indice, 1)
        console.log(`${(removeItem)} -> Item removido com sucesso`)
    }
}

function listarItem() {
    if(itensMagicos.length == '') {
        console.log('Inventário vazio')
    } else {
        console.table(itensMagicos)
    }
}