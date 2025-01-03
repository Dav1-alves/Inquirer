// Importa o módulo Inquirer
import inquirer from "inquirer";

// Define as perguntas
const perguntas = [
  {
    type: "list",
    name: "linguagem",
    message: "Qual linguagem de programação você prefere?",
    choices: ["JavaScript", "Python", "C++", "Java"],
  },
  {
    type: "input",
    name: "nome",
    message: "Qual é o seu nome?",
  },
  {
    type: "confirm",
    name: "confirmacao",
    message: "Você gosta de programar?",
  },
];

// Executa o Inquirer
inquirer.prompt(perguntas).then((respostas) => {
  console.log("\nSuas respostas:");
  console.log(`Nome: ${respostas.nome}`);
  console.log(`Linguagem preferida: ${respostas.linguagem}`);
  console.log(`Gosta de programar? ${respostas.confirmacao ? "Sim" : "Não"}`);
});
