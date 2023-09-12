let peso1 = 2
let peso2 = 5
let peso3 = 3
let nota1 = prompt('Valor da nota de Atividade Prática em Laboratório: ')
let nota2 = prompt('Valor da nota na Prova do Semestre: ')
let nota3 = prompt('Valor da nota no trabalho teórico: ')
nota1 = parseInt(nota1)
nota2 = parseInt(nota2)
nota3 = parseInt(nota3)
function MediaPonderada(){
    let tot = ((peso1 * nota1) + (peso2*nota2)+(peso3*nota3))/ (soma)
    document.write(`A média do Aluno é ${tot};`)
    let msg;
    if(tot > 9){
        msg = 'A'
    }
    else if(tot > 8 && tot <= 9){
        msg = 'B'
    }
    else if(tot > 7 && tot <= 8){
        msg = 'C'
    }
    else if(tot > 6 && tot <= 7){
        msg = 'D'
    }
    else if(tot > 5 && tot <= 6){
        msg = 'E'
    }
    else if(tot < 5 ){
        msg = 'F'
    }
    document.write(` Sua classificação é: ${msg}`)
}

let soma = peso1+peso2+peso3
MediaPonderada()