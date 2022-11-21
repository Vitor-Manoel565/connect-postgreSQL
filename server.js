import client from "pg";
const {Client} = client; // pacote pg instalado no projeto, para conectar com o banco de dados

const alunos = new Client({ // objeto que representa a conexão com o banco de dados
  user: "postgres", // usuário do banco de dados
  password: "12345", // senha do banco de dados
  host: "localhost", // host do banco de dados (localhost)
  port: 5432, // porta do banco de dados
  database: "aluno", // nome do banco de dados
});

async function connect() { // função que conecta com o banco de dados
    alunos.connect(); // conecta com o banco de dados
    console.log("Conectado ao banco de dados"); // mensagem de confirmação
  try {
    alunos.query("SELECT * FROM aluno", (error, response) => { // query que seleciona todos os dados da tabela aluno
      console.log(response.rows); // mostra os dados da tabela aluno
      alunos.end(); // encerra a conexão com o banco de dados
    });
  } catch (error) { // caso ocorra algum erro
    console.log("Erro ao conectar ao banco de dados", error); // mensagem de erro
  }
}
connect(); // chama a função que conecta com o banco de dados
