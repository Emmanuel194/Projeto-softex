
const pontuacoes = new Map();


pontuacoes.set("João", 50);
pontuacoes.set("Pedro", 120);
pontuacoes.set("Luiza", 70);
pontuacoes.set("Marcela", 10);
pontuacoes.set("Yuri", 34);


const nomeParticipante = "Pedro";
const pontuacaoParticipante = pontuacoes.get(nomeParticipante);

if (pontuacaoParticipante !== undefined) {
  console.log(`${nomeParticipante} obteve ${pontuacaoParticipante} pontos.`);
} else {
  console.log(`O participante ${nomeParticipante} não foi encontrado.`);
}