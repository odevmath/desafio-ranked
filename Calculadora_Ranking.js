const mensagem = calcRanking('Risenmath', 210)
let ranking
console.log(mensagem)

function calcRanking(nickname, saldo){
    let ranking;
    if (saldo <= 30){
        ranking = 'Ferro';
    } else if (saldo <= 60){
        ranking = 'Bronze';
    } else if (saldo <= 90){
        ranking = 'Prata';
    } else if (saldo <= 120){
        ranking = 'Ouro';
    } else if (saldo <= 165){
        ranking = 'Platina';
    } else if (saldo <= 210){
        ranking = 'Diamante';
    } else if (saldo <= 400){
        ranking = 'Mestre';
    } else {
        ranking = 'Desafiante';
    }
    let mensagem = `${nickname} tem um saldo de ${saldo} vitórias no Elo ${ranking}`;
    return mensagem;
}