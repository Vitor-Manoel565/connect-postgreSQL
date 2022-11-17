import client from "pg";
const {Client} = client;

const alunos = new Client({
  user: "postgres",
  password: "12345",
  host: "localhost",
  port: 5432,
  database: "aluno",
});

async function connect() {
    alunos.connect();
    console.log("Conectado ao banco de dados");
  try {
    alunos.query("SELECT * FROM aluno", (error, response) => {
      console.log(response.rows);
      alunos.end();
    });
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados", error);
  }
}
connect();
