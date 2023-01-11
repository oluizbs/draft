
//pega calcular e chama função que inicia o calculo do imc
const calc = document.querySelector("#calcular").addEventListener('click', ()=>{
    //pegar nome
    const nome = document.querySelector("#nome").value;
    
    //pega elemento altura
    const altura = document.querySelector("#altura").value;
    
    //pega elemento peso
    const peso = document.querySelector("#peso").value;
    
    //pega elemento resultado
    const resultado = document.querySelector("#resultado");

    if (nome !== '' && altura !== '' && peso !==''){
        //se for preenchido corretamente, se inicia o calculo do imc
        const calcIMC = (peso/(altura*altura)).toFixed(1);

        let classificacao = "";
        if(calcIMC < 18.5){
            classificacao = 'você está abaixo do peso.';
        }else if(calcIMC < 25){
            classificacao = 'você está com o peso ideal.';
        }else if(calcIMC < 30){
            classificacao = 'um pouco acima do peso.'
        }else if(calcIMC < 35){
            classificacao = 'grau de obesidade 1.'
        }else if(calcIMC < 40){
            classificacao = 'grau de obesidade 2.'
        }else{
            classificacao = 'grau de obesidade 3. CUIDADO!!'
        }

        resultado.textContent = `${nome} seu IMC é ${calcIMC} e você está ${classificacao} `;
    }
    else{
        resultado.textContent = "Preencha todos os campos!";
    }
})