const conexao = new XMLHttpRequest
const url = "https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json"
var resposta_array

conexao.open("GET", url)
conexao.onreadystatechange = () => {
    if(conexao.status === 200 && conexao.readyState === 4) {
        resposta_array = JSON.parse(conexao.responseText)
        monta_div()

    }
}
conexao.send()

// cardapio (index)
function monta_div() {
    const $main = document.querySelector('#menu_pratos')

    resposta_array.forEach(element => {
        const $div = document.createElement('div')
        const $img = document.createElement('img')
        const $h3 = document.createElement('h3')
        const $p_desc = document.createElement('p')
        const $p_preco = document.createElement('p')
        const $button = document.createElement('button')

        $img.src = `https://rafaelescalfoni.github.io/desenv_web/restaurante/${element.photo}`

        $img.classList.add('prato_imagem')

        $h3.textContent = element.name || element.title
        $h3.classList.add('prato_titulo')

        $p_desc.textContent = element.details
        $p_desc.classList.add('prato_descricao')

        $p_preco.textContent = element.price
        $p_preco.classList.add('prato_preco')

        $button.textContent = 'Add. carrinho'
        $div.classList.add('prato_div')
        $div.id = element.code

        $div.appendChild($img)
        $div.appendChild($h3)
        $div.appendChild($p_desc)
        $div.appendChild($p_preco)
        $div.appendChild($button)
        
        $main.appendChild($div)

    });

    return 0
}

// carrinho
const $btn_carrinho = document.querySelector('#carrinho')
$btn_carrinho.addEventListener('click', () => {
    const prato_nome = document.querySelector('.')
    resposta_array.forEach(e => {

    })
})