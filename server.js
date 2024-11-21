import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import dotenv from 'dotenv';

dotenv.config();

await conectarAoBanco(process.env.STRING_CONEXAO); 

const posts = [
    {
        id:1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
        local:"internet",
        data:"20/11/2024"
    },
    {
        id:2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://picsum.photos/seed/1/300/200",
        local: "Praia de Copacabana 2",
        data: "2023-11-20"
    },
    {
        id:3,
        descricao: "Meu gato fazendo cara de bobo",
        imagem: "https://placekitten.com/200/300",
        categoria: "Animais"
    },
    {
        id:4,
        descricao: "Receita deliciosa de bolo de chocolate",
        imagem: "https://loremflickr.com/320/240/food",
        categoria: "Comida",
        ingredientes: ["chocolate", "ovos", "farinha", "leite"]
    },
    {
        id:5,
        descricao: "Citação inspiradora sobre a vida",
        autor: "Albert Einstein",
        texto: "A imaginação é mais importante que o conhecimento."
    },
    {
        id:6,
        descricao: "Vídeo de uma música épica",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
        duracao: "3:32"
    }
];

const app = express();
app.use(express.json());

app.listen(3000,()=> {
console.log("Servidor escutando...");
});

function buscarPostPorID(id){
  return posts.findIndex((post)=>{
     return post.id === Number(id);
  });
}

app.get("/posts/:id",(req,res)=>{ //Oque vem depois do '/:' será o atributo referência
    const index = buscarPostPorID(req.params.id) //Usei 'id' porque é o atributo desejado
    res.status(200).json(posts[index]);
});

app.get("/livros",(req,res)=>{
    
    const livro1={
        titulo: "Evangelho falsificado",
        autor: "Roger E. Olson",
        opiniao:"Excelente Livro"
    }
    
    res.status(200).send(livro1);
})