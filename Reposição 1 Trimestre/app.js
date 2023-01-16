const btEnvia = document.querySelector('#enviar_valor').addEventListener("click", ()=>{
    const raio = document.querySelector('#raio').value
    const volume = document.querySelector('#volume').value
    const pi = Math.PI
    const conta = (pi(raio**2)+volume)/1000
    console.log(conta)
})