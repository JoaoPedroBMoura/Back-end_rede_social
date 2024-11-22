import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import dotenv from 'dotenv';

dotenv.config();

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 

const app = express();
app.use(express.json());

app.listen(3000,()=> {
console.log("Servidor escutando...");
});

/*  Old search method
function buscarPostPorID(id){
  return posts.findIndex((post)=>{
     return post.id === Number(id);
  });
};
*/

async function getTodosPosts(){
  const db = conexao.db("conteudo_rede_social");
  const colecao = db.collection("posts");

  return colecao.find().toArray();
};

app.get("/posts",async (req,res)=>{ //Oque vem depois do '/:' será o atributo referência
    const posts = await getTodosPosts();
    res.status(200).json(posts);
});

app.get("/livros",(req,res)=>{
    
    const livro1={
        titulo: "Evangelho falsificado",
        autor: "Roger E. Olson",
        opiniao:"Excelente Livro"
    }
    
    res.status(200).send(livro1);
})