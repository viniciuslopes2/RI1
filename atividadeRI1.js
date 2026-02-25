function descricao(p){
        return 'Nome do personagem: ' + p.nome + '\n'
           + 'Codinome do personagem: ' + p.codinome + '\n'
           + 'Arma Principal: ' + p.armaPrincipal + '\n'
           + 'Arma Secundária: ' + p.armaSecundaria + '\n'
           + 'Nível da força: ' + p.forca + '\n'
           + 'Nível de velocidade: ' + p.velocidade + '\n'
           + 'Nível de resistência: ' + p.resistencia;
}

const PersonagensMarvel = [
    {nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo',
    armaSecundaria: 'Força',
    velocidade: 85,
    forca: 75,
    resistencia: 80},

    {nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: 'Armadura de ferro',
    armaSecundaria: 'Voar',
    velocidade: 90,
    forca: 100,
    resistencia: 79},

    {nome: 'Peter Parker',
    codinome: 'Homem-Aranha',
    armaPrincipal: 'Teia',
    armaSecundaria: 'Escalar',
    velocidade: 93,
    forca: 70,
    resistencia: 60},

    {nome: 'Robert Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Punhos',
    armaSecundaria: 'Super força',
    velocidade: 80,
    forca: 95,
    resistencia: 80},

    {nome: 'TChalla',
    codinome: 'Pantera Negra',
    armaPrincipal: 'Garras',
    armaSecundaria: 'Inteligência',
    velocidade: 76,
    forca: 70,
    resistencia: 70},

    {nome: 'Thor Odison',
    codinome: 'Thor',
    armaPrincipal: 'Martelo Mjonir',
    armaSecundaria: 'Raios',
    velocidade: 90,
    forca: 100,
    resistencia: 84},

    {nome: 'Thanos',
    codinome: 'Titã Louco',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundaria: 'Força',
    velocidade: 50,
    forca: 94,
    resistencia: 80},
]

const thanos = PersonagensMarvel.find(p => p.codinome === 'Titã Louco') //aqui define o vilão da marvel

for(let i = 0; i < PersonagensMarvel.length; i++){
    let heroi = PersonagensMarvel[i]
    if (heroi.codinome === 'Titã Louco') continue;
    console.log("========================================");
    console.log(descricao(heroi)); 
    console.log("----------------------------------------");
    console.log("VS");
    console.log("----------------------------------------");
    console.log(descricao(thanos));
    console.log("========================================\n");
    if (heroi.forca > thanos.forca){
        console.log('Resultado: ' + heroi.codinome + ' venceu o thanos!')
    }else{
        console.log('Resultado: Thanos derrotou o herói ' + heroi.codinome)
    }
}