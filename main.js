const listaDeCompras = [];

function adicionarALista(item) {
      listaDeCompras.push(item)
      atualizarLista(item)
      compra.focus()
      compra.value = ''

}


function exibirLista() {
      alert(listaDeCompras)
}

function removerDaLista() {
      listaDeCompras.pop()
}

function atualizarLista(compra) {

      const item = document.createElement('p')
      item.textContent = compra
      lista.appendChild(item)
};



const compra = document.getElementById('compra');
adicionarCompra.addEventListener('click', function () {
      adicionarALista(compra.value)
      console.log(compra.value)
})

const lista = document.createElement('div')
lista.id = 'l1'
lista.className = 'l1'
lista.textContent = compra.value

container.appendChild(lista)

