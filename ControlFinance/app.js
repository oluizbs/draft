const transacao_ul = document.querySelector('#transactions')
const lucros_display = document.querySelector('#money-plus')
const despesas_display = document.querySelector('#money-minus')
const balanceamento_display = document.querySelector('#balance')
const formulario = document.querySelector('#form')
const nome_transacao = document.querySelector('#text')
const valor_transacao = document.querySelector('#amount')

let transacao = [
    {id: 1, name: 'Bolo', amount: -20},
    {id: 2, name: 'Salário', amount: 320},
    {id: 3, name: 'Torta', amount: -20},
    {id: 4, name: 'Viola', amount: -20},
    {id: 5, name: 'Vale-Presente', amount: 100}
]

const armazenamento_local = JSON.parse(localStorage.getItem('transacao'))
let transacoes_array = localStorage.getItem('transacao') !== null ? armazenamento_local : []


const remove_transacao = id => {
    transacoes_array  = transacoes_array.filter(operacao => operacao.id !== id)
    atualiza_armazenamento_local()
    iniciar()
}

const add_transacao = transacao => {
    const operacao = transacao.amount < 0 ? '-' : '+'
    const css_classe = transacao.amount < 0 ? 'minus' : 'plus'
    const amountOperator = Math.abs(transacao.amount)
    const li = document.createElement('li')

    li.classList.add(css_classe)
    li.innerHTML = `${transacao.name} <span> ${operacao} R$ ${amountOperator}</span>
    <button class="delete-btn" onClick = "remove_transacao(${transacao.id})">
        x
    </button>`

    transacao_ul.append(li) 
}

const atualiza_valores = () => {
    const valores_transacoes = transacoes_array
        .map(transacoes => transacoes.amount)
    
    const total = valores_transacoes
        .reduce((acumulador, transacoes) => acumulador + transacoes, 0)
    
    const lucro = valores_transacoes
        .filter(valor => valor > 0)
        .reduce((acumulador, valor) => acumulador + valor, 0)
        .toFixed(2)

    const despesa = Math.abs(valores_transacoes
        .filter(valor => valor < 0)
        .reduce((acumulador, valor) => acumulador + valor, 0))
        .toFixed(2)

    balanceamento_display.textContent = `R$ ${total}`
    lucros_display.textContent = `R$ ${lucro}`
    despesas_display.textContent = `R$ ${despesa}`

}

const iniciar = () =>{
    transacao_ul.innerHTML = ''
    transacoes_array.forEach(add_transacao);
    atualiza_valores()
}

iniciar()

const atualiza_armazenamento_local = () => {
    localStorage.setItem('transacoes', JSON.stringify(transacoes_array))
}

const gera_id = () => Math.round(Math.random() * 1000)

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const transacao_nome = nome_transacao.value.trim()
    const transacao_valor = valor_transacao.value.trim()
    
    if(nome_transacao.value.trim() === '' || valor_transacao.value.trim() === '') {
        alert('Por favor preencha o nome e o valor da transação!')
        return
    }

    const transacao_nova = {   
        id: gera_id(), 
        name: transacao_nome, 
        amount: Number(transacao_valor)
    }

    transacoes_array.push(transacao_nova)
    iniciar()
    atualiza_armazenamento_local()

    nome_transacao.value = ''
    valor_transacao.value = ''
})