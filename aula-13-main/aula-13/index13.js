const filme = {
    nome: 'Flash',
    anoDelancamento: 2023,
    listaElenco: ['Ezra Miller','Michael Keaton','Sasha Calle','Kiersey Clemons','Maribel Verdú'],
    principal: ['Ezra Miller'],
    jaVi: true,
}

console.log('Nome do filme:', filme.nome)
console.log('Ano de lançamento:', filme.anoDelancamento)
console.log('Todos os atores do filme:', filme.listaElenco)
console.log('Já assisti o filme:', filme.jaVi)
console.log('Ator principal:', filme.principal)

filme.personagens  = ['FLASH','BATMAN','SUPERGIRL','IRIS ALLEN','NORA ALLEN']

console.log('O ator', (filme.listaElenco[0]),'enterpreta o personagem', (filme.personagens[0]),'no filme Flash.')
console.log('O ator', (filme.listaElenco[1]),'enterpreta o personagem', (filme.personagens[1]),'no filme Flash.')
console.log('A atriz', (filme.listaElenco[2]),'enterpreta a personagem', (filme.personagens[2]),'no filme Flash.')

filme.listaElenco[0] = 'xuxa'

console.log(filme.listaElenco)

console.log('O ator', (filme.listaElenco[0]),'enterpreta o personagem', (filme.personagens[0]),'no filme Flash.')
