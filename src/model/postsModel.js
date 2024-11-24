import {conectarAoBanco,criarPost} from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 

export  async function getTodosPosts(){
    const db = conexao.db("conteudo_rede_social");
    const colecao = db.collection("posts");
  
    return colecao.find().toArray();
  };

export async function criarPost(novoPost) {
    const db = conexao.db("conteudo_rede_social");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}