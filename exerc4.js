let opcao = confirm("Você deseja poder rastrear o seu pedido?")
let pecas = prompt('Quantas peças serão transportadas?')
let regiao = prompt('Em que região será feito a entrega? (1, 2 ou 3)')
console.log(opcao)
console.log(regiao)
pecas = parseInt(pecas);

function Entrega(){
    let custo;
    let diferenca = (pecas-1000)
    console.log(diferenca)
    if (opcao == true && pecas <= 1000 && regiao == '1') {
        custo = (200 + (1*pecas))
        document.write('Taxa de rastreio R$200,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == true && pecas <= 1000 && regiao == '2') {
        custo = (200 + (1.20*pecas))
        return document.write('Taxa de rastreio R$200,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == true && pecas <= 1000 && regiao == '3') {
        custo = (200 + (1.30*pecas))
        return document.write('Taxa de rastreio R$200,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == false && pecas <= 1000 && regiao == '1') {
        custo = ((1*pecas))
        return document.write('Taxa de rastreio: R$0,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == false && pecas <= 1000 && regiao == '2') {
        custo = ((1.20*pecas))
        return document.write('Taxa de rastreio: R$0,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == false && pecas <= 1000 && regiao == '3') {
        custo = ((1.30*pecas))
        return document.write('Taxa de rastreio: R$0,00 \n'+'Valor do frete total: R$'+ custo +',00')
    }
    else if (opcao == true && pecas > 1000 && regiao == '1') {
        custo = (200 + (0.10*1*diferenca) + (pecas-diferenca))
        return document.write('Taxa de rastreio R$200,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == true && pecas > 1000 && regiao == '2') {
        custo = (200 + (0.12*1.20*diferenca) + (1.20*(pecas-diferenca)))
        return document.write('Taxa de rastreio R$200,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == true && pecas > 1000 && regiao == '3') {
        custo = (200 + (0.13*1.30*diferenca) + (1.30*(pecas-diferenca)))
        return document.write('Taxa de rastreio R$200,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == false && pecas > 1000 && regiao == '1') {
        custo = ((0.10*1*diferenca) + (pecas-diferenca))
        return document.write('Taxa de rastreio R$0,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == false && pecas > 1000 && regiao == '2') {
        custo = ((0.12*1.20*diferenca) + (1.20*(pecas-diferenca)))
        return document.write('Taxa de rastreio R$0,00 \n'+'Valor do frete total: '+ custo +',00')
    }
    else if (opcao == false && pecas > 1000 && regiao == '3') {
        custo = ((0.13*1.30*diferenca) + (1.30*(pecas-diferenca)))
        return document.write('Taxa de rastreio R$0,00 \n'+'Valor do frete total: '+ custo +',00')
    }
}
Entrega()
console.log(pecas);
console.log(custo);