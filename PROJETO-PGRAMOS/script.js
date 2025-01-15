let btnScrollHorizontalDireita = document.getElementsByClassName('btnDireita')
let DivSection = document.getElementsByClassName('produtos')
let btnScrollHorizontalEsquerda = document.getElementsByClassName('btnEsquerda')
let divProduto = document.getElementsByClassName('produto')

for(let i = 0; i < DivSection.length; i++){
    btnScrollHorizontalDireita[i].addEventListener('click', () => {
            DivSection[i].scrollLeft += 680
            btnScrollHorizontalDireita[i].style.display = 'none'
            btnScrollHorizontalEsquerda[i].style.display = 'block'
        })
    btnScrollHorizontalEsquerda[i].addEventListener('click', () => {
        DivSection[i].scrollLeft -= 680
        btnScrollHorizontalDireita[i].style.display = 'block'
        btnScrollHorizontalEsquerda[i].style.display = 'none'
    })
}

for(let i = 0; i < divProduto.length; i++){
    divProduto[i].addEventListener('mouseover', () => {
        document.getElementsByClassName('descricaoProduto')[i].style.color = 'SlateBlue'
        divProduto[i].style.border = '2px solid black'
    })
    divProduto[i].addEventListener('mouseleave', () => {
        document.getElementsByClassName('descricaoProduto')[i].style.color = 'black'
        divProduto[i].style.border = 'none'
    })
}