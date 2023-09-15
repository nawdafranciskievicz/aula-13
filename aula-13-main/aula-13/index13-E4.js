const pessoaOriginal = {
    nome: 'clovis',
    idade: 35,
    genero: 'helicopterosexual',
    musicaPreferida: 'Jazz'
}

console.log('O nome da pessoa é', pessoaOriginal.nome,'ele se identifica como', pessoaOriginal.genero,'e ele tem', pessoaOriginal.idade,'anos e gosta muito de', pessoaOriginal.musicaPreferida,)

function clonarPessoa(pessoaOriginal) {
    const pessoaClone = {
        ...pessoaOriginal,
        comidasFavoritas: ['maça','kiwi','coco'],
        amigo: {
            nome: 'joaquin',
            idade: 19
        }
    }
}

console.log('O nome da pessoa é', pessoaOriginal.nome,'e suas comidas preferidas são', pessoaClone.comidasFavoritas,'e seu melhor amigo se chama', pessoaClone.amigo.nome,'e ele tem', pessoaClone.amigo.idade,'anos')