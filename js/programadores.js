let h = 0;
let j = 0;
let c = 0;
let 
function calcular(){
    if (linguagens.value == "html"){
        h++;
    }else if(linguagens.value == "css"){
        c++;
    }else if(linguagens.value == "js"){
        j++;
    }else{
        document.getElementById('saida').innerText = 'nenhuma linguagem foi selecionada!'
    }
    document.getElementById('saidajs').innerText = j;
    document.getElementById('saidacss').innerText = c;
    document.getElementById('saidah').innerText = h;
}