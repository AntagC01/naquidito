const perguntasRespostas = [
    {
        pergunta: "Qual a altura do Monte Everest?",
        resposta: "8849m"
    },
    {
        pergunta: "Qual o comprimento da Ponte Rio-Niterói?",
        resposta: "13km"
    },
    {
        pergunta: "Qual a profundidade média do Oceano Atlântico?",
        resposta: "3646m"
    },
    {
        pergunta: "Qual a velocidade máxima de um guepardo?",
        resposta: "120km/h"
    },
    {
        pergunta: "Qual a velocidade da luz no vácuo?",
        resposta: "299.792.458m/s"
    },
    {
        pergunta: "Qual o diâmetro da Terra?",
        resposta: "12742km"
    },
    {
        pergunta: "Qual a distância média da Terra à Lua?",
        resposta: "384400km"
    },
    {
        pergunta: "Qual a altura da Torre Eiffel?",
        resposta: "300m"
    },
    {
        pergunta: "Qual a altura do Cristo Redentor?",
        resposta: "38m"
    },
    {
        pergunta: "Qual a altura do Burj Khalifa?",
        resposta: "828m"
    },
    {
        pergunta: "Quantos quilômetros tem a Maratona Olímpica?",
        resposta: "42.195km"
    },
    {
        pergunta: "Qual a temperatura média do corpo humano?",
        resposta: "37°C"
    },
    {
        pergunta: "Qual a extensão do Rio Amazonas?",
        resposta: "6992km"
    },
    {
        pergunta: "Qual a área aproximada do Brasil?",
        resposta: "8515767km²"
    },
    {
        pergunta: "Quantos dentes possui um adulto saudável?",
        resposta: "32"
    },
    {
        pergunta: "Qual a população aproximada do Brasil?",
        resposta: "203.000.000"
    },
    {
        pergunta: "Qual a massa aproximada de um elefante africano adulto?",
        resposta: "6000kg"
    },
    {
        pergunta: "Quantos litros de água um hipopótamo pode beber em um dia?",
        resposta: "200L"
    },
    {
        pergunta: "Quantos centímetros mede aproximadamente a língua de uma girafa?",
        resposta: "50cm"
    },
    {
        pergunta: "Quantos quilos de bambu um panda pode comer por dia?",
        resposta: "38kg"
    },
    {
        pergunta: "Quantos ovos uma galinha pode botar em um ano?",
        resposta: "300"
    },
    {
        pergunta: "Quantos metros um canguru consegue saltar em um único pulo?",
        resposta: "9m"
    },
    {
        pergunta: "Quantas horas por dia um gato costuma dormir?",
        resposta: "16h"
    },
    {
        pergunta: "Quantos quilômetros por hora uma preguiça percorre?",
        resposta: "0.24km/h"
    },
    {
        pergunta: "Quantas vezes por minuto o coração de um hamster pode bater?",
        resposta: "450"
    },
    {
        pergunta: "Quantos dentes possui um tubarão ao longo da vida?",
        resposta: "30000"
    },
    {
        pergunta: "Quantos metros pode medir a maior pizza já feita?",
        resposta: "40m"
    },
    {
        pergunta: "Quantos cachorros-quentes foram consumidos pelo recordista mundial em 10 minutos?",
        resposta: "76"
    },
    {
        pergunta: "Quantos quilos pesava a maior abóbora já registrada?",
        resposta: "1226kg"
    },
    {
        pergunta: "Quantos metros tinha o maior cachorro do mundo em pé?",
        resposta: "2.13m"
    },
    {
        pergunta: "Quantos centímetros tinha a menor vaca do mundo?",
        resposta: "61cm"
    },
    {
        pergunta: "Quantas bolas de tênis cabem aproximadamente em um ônibus escolar?",
        resposta: "50000"
    },
    {
        pergunta: "Quantos quilos de comida um urso pode comer em um dia?",
        resposta: "40kg"
    },
    {
        pergunta: "Quantas bananas um gorila adulto pode comer em uma refeição?",
        resposta: "20"
    },
    {
        pergunta: "Quantos litros de baba um cachorro São Bernardo pode produzir por dia?",
        resposta: "1L"
    },
    {
        pergunta: "Quantos metros de altura tinha o maior boneco de neve já construído?",
        resposta: "37m"
    },
    {
        pergunta: "Quantas vezes uma mosca bate as asas por segundo?",
        resposta: "200"
    },
    {
        pergunta: "Quantos quilos de mel uma colmeia pode produzir em um ano?",
        resposta: "45kg"
    },
    {
        pergunta: "Quantos metros uma pulga consegue saltar proporcionalmente ao seu tamanho?",
        resposta: "150m"
    },
    {
        pergunta: "Quantos hambúrgueres o brasileiro médio come por ano?",
        resposta: "60"
    },
    {
        pergunta: "Quantos litros de refrigerante são vendidos por segundo no mundo?",
        resposta: "10000L"
    },
    {
        pergunta: "Quantos rolos de papel higiênico uma pessoa usa por ano em média?",
        resposta: "100"
    },
    {
        pergunta: "Quantos espirros por segundo um espirro alcança?",
        resposta: "45m/s"
    },
    {
        pergunta: "Quantos decibéis pode atingir o ronco de uma pessoa?",
        resposta: "90dB"
    },
    {
        pergunta: "Quantos metros de macarrão uma pessoa come em média por ano?",
        resposta: "600m"
    },
    {
        pergunta: "Quantas lambidas são necessárias para terminar um pirulito?",
        resposta: "1000"
    },
    {
        pergunta: "Quantos quilos de pelo um cachorro perde por ano?",
        resposta: "1kg"
    },
    {
        pergunta: "Quantos pombos seriam necessários para puxar um carro popular?",
        resposta: "1500"
    },
    {
        pergunta: "Quantos hambúrgueres empilhados atingiriam a altura da Torre Eiffel?",
        resposta: "3000"
    },
    {
        pergunta: "Quantos gatos seriam necessários para formar uma escada de 10 metros?",
        resposta: "25"
    },
    {
        pergunta: "Quantos patos alinhados ocupariam um campo de futebol?",
        resposta: "700"
    },
    {
        pergunta: "Quantas pizzas seriam necessárias para cobrir uma quadra de futsal?",
        resposta: "600"
    },
    {
        pergunta: "Quantos capivaras seriam necessárias para puxar um trem?",
        resposta: "800"
    },
    {
        pergunta: "Quantos pães de queijo empilhados chegariam até a Lua?",
        resposta: "1280000000"
    },
    {
        pergunta: "Quantos gatos seriam necessários para lotar um avião comercial?",
        resposta: "1200"
    },
    {
        pergunta: "Quantos sorvetes seriam necessários para encher uma piscina olímpica?",
        resposta: "2500000"
    },
    {
        pergunta: "Quantos cachorros-quentes alinhados dariam a volta em um campo de futebol?",
        resposta: "700"
    },
    {
        pergunta: "Quantos patinhos de borracha cabem dentro de uma baleia azul?",
        resposta: "150000"
    },
    {
        pergunta: "Quantas pizzas empilhadas alcançariam a altura do Cristo Redentor?",
        resposta: "1900"
    },
    {
        pergunta: "Quantos hamsters seriam necessários para mover uma carroça?",
        resposta: "500"
    },
    {
        pergunta: "Quantas melancias cabem dentro de um ônibus escolar?",
        resposta: "2500"
    },
    {
        pergunta: "Quantos flamingos seriam necessários para substituir um cavalo?",
        resposta: "12"
    },
    {
        pergunta: "Quantos brigadeiros seriam necessários para construir uma casa?",
        resposta: "500000"
    },
    {
        pergunta: "Quantos pinguins seriam necessários para lotar um elevador?",
        resposta: "40"
    },
    {
        pergunta: "Quantos tacos de golfe empilhados alcançariam a estratosfera?",
        resposta: "17000"
    },
    {
        pergunta: "Quantos churros seriam necessários para atravessar a Ponte Rio-Niterói?",
        resposta: "130000"
    },
    {
        pergunta: "Quantos pandas seriam necessários para formar um time de futebol americano?",
        resposta: "53"
    },
    {
        pergunta: "Quantos croissants seriam necessários para construir uma escada até o segundo andar?",
        resposta: "250"
    },
    {
        pergunta: "Quantos dinossauros infláveis cabem em um supermercado?",
        resposta: "350"
    },
    {
        pergunta: "Quantos picolés seriam necessários para construir um iglu?",
        resposta: "8000"
    },
    {
        pergunta: "Quantos coelhos seriam necessários para puxar um tanque de guerra?",
        resposta: "3000"
    },
    {
        pergunta: "Quantas batatas fritas alinhadas dariam a volta na Terra?",
        resposta: "255000000"
    },
    {
        pergunta: "Quantos gnomos de jardim seriam necessários para formar uma muralha medieval?",
        resposta: "4500"
    },
    {
        pergunta: "Quantas rosquinhas empilhadas alcançariam a altura de um prédio de 20 andares?",
        resposta: "1200"
    },
    {
        pergunta: "Quantos patos seriam necessários para lotar uma sala de cinema?",
        resposta: "900"
    },
    {
        pergunta: "Quantos narvais seriam necessários para rebocar um navio de cruzeiro?",
        resposta: "1500"
    },
    {
        pergunta: "Quantas panquecas seriam necessárias para cobrir uma quadra de basquete?",
        resposta: "3500"
    },
    {
        pergunta: "Quantos porquinhos-da-índia seriam necessários para formar uma banda de rock?",
        resposta: "7"
    },
    {
        pergunta: "Quantos cocos seriam necessários para afundar um barco de pesca?",
        resposta: "12000"
    },
    {
        pergunta: "Quantas almôndegas seriam necessárias para construir um castelo?",
        resposta: "800000"
    },
    {
        pergunta: "Quantos esquilos seriam necessários para derrubar uma árvore?",
        resposta: "200"
    },
    {
        pergunta: "Quantos donuts seriam necessários para substituir as rodas de um caminhão?",
        resposta: "120"
    },
    {
        pergunta: "Quantas galinhas seriam necessárias para vencer um rinoceronte em uma queda de braço?",
        resposta: "9000"
    },
    {
        pergunta: "Quantos unicórnios infláveis seriam necessários para levantar um helicóptero?",
        resposta: "450"
    },
    {
        pergunta: "Quantos jacarés seriam necessários para formar uma ponte sobre um rio?",
        resposta: "80"
    },
    {
        pergunta: "Quantas cuecas seriam necessárias para fazer uma vela de navio?",
        resposta: "700"
    },
    {
        pergunta: "Quantos pombos seriam necessários para carregar uma geladeira?",
        resposta: "3500"
    },
    {
        pergunta: "Quantas coxinhas seriam necessárias para construir uma pirâmide?",
        resposta: "250000"
    },
    {
        pergunta: "Quantos gorilas seriam necessários para tocar uma sinfonia completa?",
        resposta: "120"
    },
    {
        pergunta: "Quantos marshmallows seriam necessários para encher um estádio?",
        resposta: "15000000"
    },
    {
        pergunta: "Quantos patinetes seriam necessários para puxar um foguete?",
        resposta: "50000"
    },
    {
        pergunta: "Quantas capivaras empilhadas alcançariam a janela de um avião?",
        resposta: "3000"
    },
       {
        pergunta: "Quantos hambúrgueres empilhados alcançariam a altura da Torre Eiffel?",
        resposta: "3000"
    },
    {
        pergunta: "Quantos gatos domésticos pesariam o mesmo que um elefante africano?",
        resposta: "1000"
    },
    {
        pergunta: "Quantas bolas de futebol cabem dentro de um ônibus escolar?",
        resposta: "2500"
    },
    {
        pergunta: "Quantos pães franceses alinhados dariam a volta em um campo de futebol?",
        resposta: "700"
    },
    {
        pergunta: "Quantas moedas de R$1 empilhadas alcançariam 1km de altura?",
        resposta: "52632"
    },
    {
        pergunta: "Quantos litros de refrigerante cabem em uma piscina olímpica?",
        resposta: "2500000"
    },
    {
        pergunta: "Quantos cachorros médios pesariam o mesmo que um carro popular?",
        resposta: "100"
    },
    {
        pergunta: "Quantas pizzas grandes seriam necessárias para cobrir uma quadra de futsal?",
        resposta: "350"
    },
    {
        pergunta: "Quantos grãos de arroz pesam o mesmo que uma pessoa adulta?",
        resposta: "1400000"
    },
    {
        pergunta: "Quantas capivaras alinhadas atravessariam a Ponte Rio-Niterói?",
        resposta: "10000"
    },
    {
        pergunta: "Quantas latinhas de refrigerante empilhadas alcançariam o Cristo Redentor?",
        resposta: "310"
    },
    {
        pergunta: "Quantos ovos de galinha pesam o mesmo que um rinoceronte?",
        resposta: "40000"
    },
    {
        pergunta: "Quantos lápis colocados ponta com ponta alcançariam a altura do Everest?",
        resposta: "47069"
    },
    {
        pergunta: "Quantas coxinhas seriam necessárias para pesar o mesmo que um Fusca?",
        resposta: "8000"
    },
    {
        pergunta: "Quantos smartphones empilhados alcançariam a altura de um prédio de 20 andares?",
        resposta: "2000"
    },
    {
        pergunta: "Quantas melancias pesariam o mesmo que uma baleia azul?",
        resposta: "3000"
    },
    {
        pergunta: "Quantos pombos seriam necessários para igualar o peso de um ônibus?",
        resposta: "2500"
    },
    {
        pergunta: "Quantos brigadeiros seriam necessários para encher uma banheira?",
        resposta: "5000"
    },
    {
        pergunta: "Quantas bananas alinhadas atravessariam a Ponte da Amizade?",
        resposta: "3900"
    },
    {
        pergunta: "Quantos rolos de papel higiênico empilhados alcançariam a Estátua da Liberdade?",
        resposta: "465"
    },
    {
        pergunta: "Quais são os 10 países mais populosos do mundo?",
        resposta: "1. Índia, 2. China, 3. Estados Unidos, 4. Indonésia, 5. Paquistão, 6. Nigéria, 7. Brasil, 8. Bangladesh, 9. Rússia, 10. México."
    },
    {
        pergunta: "Quais são as 10 maiores economias do mundo?",
        resposta: "1. Estados Unidos, 2. China, 3. Alemanha, 4. Japão, 5. Índia, 6. Reino Unido, 7. França, 8. Itália, 9. Canadá, 10. Brasil."
    },
    {
        pergunta: "Quais são os 10 maiores oceanos e mares do mundo?",
        resposta: "1. Oceano Pacífico, 2. Oceano Atlântico, 3. Oceano Índico, 4. Oceano Antártico, 5. Oceano Ártico, 6. Mar das Filipinas, 7. Mar de Coral, 8. Mar da Arábia, 9. Mar da China Meridional, 10. Mar de Weddell."
    },
    {
        pergunta: "Quais são os 10 animais terrestres mais rápidos?",
        resposta: "1. Guepardo, 2. Antílope-pronghorn, 3. Gnu, 4. Leão, 5. Gazela-de-Thomson, 6. Cavalo, 7. Avestruz, 8. Coiote, 9. Raposa-vermelha, 10. Lebre."
    },
    {
        pergunta: "Quais são os 10 maiores países em área territorial?",
        resposta: "1. Rússia, 2. Canadá, 3. China, 4. Estados Unidos, 5. Brasil, 6. Austrália, 7. Índia, 8. Argentina, 9. Cazaquistão, 10. Argélia."
    },
    {
        pergunta: "Quais são as 10 montanhas mais altas do mundo?",
        resposta: "1. Everest, 2. K2, 3. Kangchenjunga, 4. Lhotse, 5. Makalu, 6. Cho Oyu, 7. Dhaulagiri I, 8. Manaslu, 9. Nanga Parbat, 10. Annapurna I."
    },
    {
        pergunta: "Quais são os 10 filmes com maior bilheteria da história?",
        resposta: "1. Avatar, 2. Vingadores: Ultimato, 3. Avatar: O Caminho da Água, 4. Titanic, 5. Star Wars: O Despertar da Força, 6. Vingadores: Guerra Infinita, 7. Homem-Aranha: Sem Volta para Casa, 8. Divertida Mente 2, 9. Jurassic World, 10. O Rei Leão."
    },
    {
        pergunta: "Quais são os 10 idiomas mais falados do mundo?",
        resposta: "1. Inglês, 2. Mandarim, 3. Hindi, 4. Espanhol, 5. Francês, 6. Árabe, 7. Bengali, 8. Português, 9. Russo, 10. Urdu."
    },
    {
        pergunta: "Quais são os 10 esportes mais populares do mundo?",
        resposta: "1. Futebol, 2. Críquete, 3. Hóquei, 4. Tênis, 5. Voleibol, 6. Tênis de mesa, 7. Basquete, 8. Beisebol, 9. Rugby, 10. Golfe."
    },
    {
        pergunta: "Quais são os 10 elementos químicos mais abundantes na crosta terrestre?",
        resposta: "1. Oxigênio, 2. Silício, 3. Alumínio, 4. Ferro, 5. Cálcio, 6. Sódio, 7. Potássio, 8. Magnésio, 9. Titânio, 10. Hidrogênio."
    },
    {
        pergunta: "Quais são as 10 cidades mais populosas do mundo?",
        resposta: "1. Tóquio, 2. Délhi, 3. Xangai, 4. Daca, 5. São Paulo, 6. Cidade do México, 7. Cairo, 8. Pequim, 9. Mumbai, 10. Osaka."
    },
    {
        pergunta: "Quais são os 10 rios mais longos do mundo?",
        resposta: "1. Nilo, 2. Amazonas, 3. Yangtzé, 4. Mississippi-Missouri, 5. Ienissei, 6. Huang He, 7. Ob-Irtysh, 8. Paraná, 9. Congo, 10. Amur."
    },
    {
        pergunta: "Quais são os 10 maiores desertos do mundo?",
        resposta: "1. Antártida, 2. Ártico, 3. Saara, 4. Deserto Arábico, 5. Gobi, 6. Kalahari, 7. Patagônia, 8. Grande Deserto Arenoso, 9. Sírio, 10. Chihuahuense."
    },
    {
        pergunta: "Quais são os 10 planetas e corpos celestes mais conhecidos do Sistema Solar?",
        resposta: "1. Mercúrio, 2. Vênus, 3. Terra, 4. Marte, 5. Júpiter, 6. Saturno, 7. Urano, 8. Netuno, 9. Plutão, 10. Ceres."
    },
    {
        pergunta: "Quais são os 10 animais marinhos mais rápidos?",
        resposta: "1. Peixe-vela, 2. Marlim-negro, 3. Espadarte, 4. Atum-rabilho, 5. Tubarão-mako, 6. Orca, 7. Golfinho-comum, 8. Peixe-voador, 9. Barracuda, 10. Lula-gigante."
    },
    {
        pergunta: "Quais são os 10 maiores mamíferos do mundo?",
        resposta: "1. Baleia-azul, 2. Baleia-fin, 3. Baleia-franca, 4. Cachalote, 5. Elefante-africano, 6. Elefante-asiático, 7. Hipopótamo, 8. Rinoceronte-branco, 9. Morsa, 10. Girafa."
    },
    {
        pergunta: "Quais são os 10 maiores estádios do mundo?",
        resposta: "1. Rungrado 1º de Maio, 2. Narendra Modi Stadium, 3. Michigan Stadium, 4. Beaver Stadium, 5. Ohio Stadium, 6. Kyle Field, 7. Tiger Stadium, 8. Neyland Stadium, 9. Darrell K Royal Stadium, 10. Bryant-Denny Stadium."
    },
    {
        pergunta: "Quais são os 10 maiores clubes campeões da Libertadores?",
        resposta: "1. Independiente, 2. Boca Juniors, 3. Peñarol, 4. River Plate, 5. Estudiantes, 6. Olímpia, 7. Nacional, 8. São Paulo, 9. Palmeiras, 10. Santos."
    },
    {
        pergunta: "Quais são as 10 seleções com mais Copas do Mundo?",
        resposta: "1. Brasil, 2. Alemanha, 3. Itália, 4. Argentina, 5. Uruguai, 6. França, 7. Inglaterra, 8. Espanha, 9. Holanda, 10. Croácia."
    },
    {
        pergunta: "Quais são os 10 videogames mais vendidos da história?",
        resposta: "1. Minecraft, 2. GTA V, 3. Tetris, 4. Wii Sports, 5. PUBG, 6. Mario Kart 8, 7. Red Dead Redemption 2, 8. Pokémon Red/Blue, 9. Terraria, 10. Wii Fit."
    },
    {
        pergunta: "Quais são os 10 consoles mais vendidos da história?",
        resposta: "1. PlayStation 2, 2. Nintendo DS, 3. Nintendo Switch, 4. Game Boy, 5. PlayStation 4, 6. PlayStation, 7. Wii, 8. PlayStation 3, 9. Xbox 360, 10. Game Boy Advance."
    }

];

let perguntasDisponiveis = [...perguntasRespostas];

// Embaralha o array
perguntasDisponiveis.sort(() => Math.random() - 0.5);

let indiceAtual = 0;

function carregarPergunta() {
    textoPergunta.textContent =
        perguntasDisponiveis[indiceAtual].pergunta;

    textoResposta.textContent =
        perguntasDisponiveis[indiceAtual].resposta;

    resposta.style.display = "none";
}

// Primeira pergunta
carregarPergunta();

document.getElementById("btnMostrar").addEventListener("click", () => {
    resposta.style.display =
        resposta.style.display === "block" ? "none" : "block";
});

document.getElementById("btnTrocar").addEventListener("click", () => {

    indiceAtual++;

    // Terminou todas as perguntas
    if (indiceAtual >= perguntasDisponiveis.length) {
        alert("Todas as perguntas já foram exibidas!");
        return;
    }

    carregarPergunta();
});