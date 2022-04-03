const db = require("../db")

class Livros {
  static async select() {
    const connect = await db.connect();
    return await connect.query("select * from livros");
  }
  
  static async insere(data) {
    const connect = await db.connect();
    const sql = "insert into livros(autor, titulo,editora, data_publicacao,preco)values($1,$2,$3,$4,$5)";
    const values = [data.autor, data.titulo, data.data_publicacao, data.preco]
    return await connect.query(sql, values);
  }

  static async atualiza(data){
    const connect = await db.connect();
    const sql = "update livros set autor=$1, titulo=$2, editora=$3 data_publicacao=$4, preco=$5 where id=$6";
    const values = [data.nome, data.sobrenome, data.data_nascimento, data.id]
    return await connect.query(sql, values);
  }
   static async deleta(data){
    const connect = await db.connect();
    const sql = "delete from livros where id=$1 "
    const values = [data.id]
    return await connect.query(sql, values);
  }
  
}

module.exports = Livros;