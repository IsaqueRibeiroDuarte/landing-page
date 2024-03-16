var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:60px"
}

function RolarParaEsquerda() {
    Bruna.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style = "display:flex; margin-top:50px"
    setaEsquerda.style = "display:none"
}

