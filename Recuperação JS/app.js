// Questão 4
let button = document.querySelector('#bt3');
button.addEventListener('click', () =>{
    let valorA = document.querySelector('#valorA').value;

    let valorB = document.querySelector('#valorB').value;

    let valorC = document.querySelector('#valorC').value;

    let valoresArray = [valorA, valorB, valorC];
    
    valoresArray.reverse();

    let result = document.querySelector('.resultP');
    result.innerHTML = valoresArray;
});
// Fim da Questão 4

// Questão 7
let bot = document.querySelector("#enviar");
    let divRes = document.querySelector("#resultado");
    bot.addEventListener('click', function(){
        let n = document.querySelector('#num').value;
        if(n < 0 || n%1!=0){
            divRes.innerHTML = "O número deve ser inteiro e positivo. Tente novamente.";
        }
        else{
            let a=1;
            let b=0;
            let c=0;
            let seq = [];
            while (c<=n){
                c=a+b;
                a=b;
                b=c;
                if(c<=n){
                    seq.push(c);
                }
            }
            console.log(seq);
            let res = 0;
            for (let i = seq.length; i>0; i--){
                res += seq[i-1];
            }
        divRes.innerHTML = "A soma dos números da sequência até o caractere informado é igual a: "+res;
        }
    });
//Fim da Questão 7

// Questão 9
const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];
 const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
};
const updateBoard =  (index) => {
    board[index] = currentPlayer;
 }
 const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}
const announce = (type) => {
    switch(type){
       case PLAYERO_WON:
            announcer.innerHTML = 'Jogador <span class="playerO">O</span> ganhou';
            break;
       case PLAYERX_WON:
            announcer.innerHTML = 'Jogador <span class="playerX">X</span> ganhou';
            break;
       case TIE:
            announcer.innerText = 'empate';
        }
    announcer.classList.remove('hide');
};
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
  
    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }
  
    if (!board.includes("")) announce(TIE);
  }
  const userAction = (tile, index) => {
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  }
  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
}
resetButton.addEventListener('click', resetBoard);

// Fim da Questão 9

// Questão 14
const nomes = [
    "GO",
    "MG",
    "SP",
    "RJ",
    "AM",
    "PA"
];
nomes.sort();

for(let i=0; i<nomes.length; i++){
    let node = document.createElement("option");
    let textnode = document.createTextNode(nomes[i]);
    node.appendChild(textnode);
    document.querySelector(".Resultado14").appendChild(node);
}
// Fim da Questão 14

// Questão 16
let btnCriar = document.querySelector('#btnCriar').
addEventListener('click', () => {

// criação de elemento (div)
    let boxElement = document.createElement("div");
    boxElement.style.width = '180px';
    boxElement.style.height = '180px';
    boxElement.style.margin = '10px';
    boxElement.style.backgroundColor = '#f00';

//adiciona a classe .box na div criada (filho)
    boxElement.classList.add('box');
    document.body.appendChild(boxElement);

    // função que limpa os quadrados da tela
    let limpar = document.querySelector('.limpar').addEventListener('click', () => {
        boxElement.outerHTML = "";
     })

        boxElement.onmouseover = function(){
        boxElement.style.backgroundColor = getRandomColor();
    }

     // estilo do quadrado
        btnCriar.style.color = '#fff'
        btnCriar.style.fontWeight = 'bold';
        btnCriar.style.backgroundColor = '#424242';
        btnCriar.style.border = 'solid #ddd';
        btnCriar.style.width = '100px';
        btnCriar.style.height = '100px';
}) //Fechamento do código da questão 16
// Fim da Questão 16

// Questão 17
function getRandomColor (){  
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; }
    return color;
}
    var newColor = getRandomColor(); // #E943F0
// Fim da Questão 17

// Questão 22
let colorR = document.querySelector('.colorR').addEventListener("click", () =>{
    colorR = document.body.style.backgroundColor = 'red'
})

let colorG = document.querySelector('.colorG').addEventListener("click", () =>{
    colorG = document.body.style.backgroundColor = 'green'
})

let colorB = document.querySelector('.colorB').addEventListener("click", () =>{
    colorB = document.body.style.backgroundColor = 'blue'
})

let colorReset = document.querySelector('.colorReset').addEventListener("click", () =>{
    colorReset = document.body.style.backgroundColor = 'white'
})
// Fim da Questão 22

// Questão 30
function achaPalavra() 
{
    let input = document.getElementById("input").value; //Pegar oq foi digitado no input
    let texto = "Lorem ipsum dolor sit amet. Qui perferendis exercitationem aut explicabo ullam ea obcaecati numquam ut illum impedit. Quo animi rerum eos nobis illo aut minima exercitationem non dignissimos velit et provident sapiente ad nihil amet sed voluptatem ducimus? "; //texto já definido no index
    texto = texto.replaceAll(',','').replaceAll('.','');
    let T = texto.split(" ");

    let p= document.getElementById("p");

    p.innerHTML = "";
    
    for(let i=0; i<T.length; i++)
    {
        if(T[i] == input) //Se
        {
            p.innerHTML = p.innerHTML +"<mark style='background-color:yellow; color:black'>"+ T[i] +"</mark>"+ " "    
        }
        else{ // Se não
            p.innerHTML = p.innerHTML + T[i] + " "
        }
    }
}
// Fim da Questão 30

// Questão 31
function abreImg (id){
    document.getElementById("select").innerHTML = "<img src=" +document.getElementById(id).src+ ">"

}
// Fim da Questão 31