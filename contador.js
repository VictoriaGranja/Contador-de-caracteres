(function(){
    "use strict";
    let frase = document.querySelector("#texto")

    contagem()

    frase.addEventListener("input", function(){
        contagem()
    })

    function contaCaracteres(){
        let qtdDeCaracteres = divideFrase(frase.value, "").length
        let caracteres = document.getElementById("caracteres")
        
        alteraTextContent(caracteres, "Caracteres: ", qtdDeCaracteres)
    }

    function contaPalavras(){
        let escrito = limpaFrase()
        escrito = divideFrase(escrito, " ")

        let qtdDePalavras = escrito.length
        let palavras = document.getElementById("palavras")

        if(escrito[0] === ""){
            qtdDePalavras -= 1
        }

        alteraTextContent(palavras, "Palavras: ", qtdDePalavras)
    }

    function contaLinhas(){
        let qtdDeLinhas = divideFrase(frase.value, /\n/).length
        let linhas = document.getElementById("linhas")

        alteraTextContent(linhas, "Linhas: ", qtdDeLinhas)
    }

    function limpaFrase(){
        return frase.value.trim()
    }

    function divideFrase(sentenca, condicao){
        let escrito = sentenca.split(condicao)

        return escrito
    }

    function alteraTextContent(objeto, frase, valor){
        objeto.textContent = frase + valor.toString()
    }

    function contagem(){
        contaCaracteres()
        contaPalavras()
        contaLinhas()
    }

}())