let btnScrollHorizontalDireita = document.getElementsByClassName('btnDireita')
let DivSection = document.getElementsByClassName('produtos')
let btnScrollHorizontalEsquerda = document.getElementsByClassName('btnEsquerda')


for(let i = 0; DivSection.length > i ; i++){
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