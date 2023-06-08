const arrayAlunos = new Array();

arrayAlunos.push({nome: "wellington", nota: 9}, {nome: "caroline", nota: 10}, {nome: "boris", nota: 3}, {nome: "isabela", nota: 6}, {nome: "Loana", nota: 5});

console.log(arrayAlunos);

const alunosAprovados = arrayAlunos.filter( (aluno) => {
    return aluno.nota >= 6;
})

console.log(alunosAprovados);