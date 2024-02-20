
let media = calculadoraRankeada(150, 30)

rankeamento(media)

function calculadoraRankeada(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
}

function rankeamento(mediaDeVitorias) {
    if (mediaDeVitorias < 10) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Ferro`)
    } else if (mediaDeVitorias >= 10 && mediaDeVitorias <= 20) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Bronze`)
        //coloquei maior igual a 10 vitorias para o heroi de nivel 10 n ficar sem ranking
    } else if (mediaDeVitorias >= 21 && mediaDeVitorias <= 50) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Prata`)
    } else if (mediaDeVitorias >= 51 && mediaDeVitorias <= 80) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Ouro`)
    } else if (mediaDeVitorias >= 81 && mediaDeVitorias <= 90) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Diamante`)
    } else if (mediaDeVitorias >= 91 && mediaDeVitorias <= 100) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Lendario`)
    } else if (mediaDeVitorias >= 101) {
        console.log(`O heroi com saldo de ${mediaDeVitorias} vitorias esta no nivel de Imortal`)
    }
    
}