function insert(num){

    const numero = document.getElementById('resultado').innerHTML 
    
    document.getElementById('resultado').innerHTML = numero + num
}

function cleam(){
   document.getElementById('resultado').innerHTML = ''
} 

function back(){
    const resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

}

function calcular(){
    const resultado = document.getElementById('resultado').innerHTML

    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}