import express from "express";

const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://picsum.photos/seed/1/300/200",
        local: "Praia de Copacabana",
        data: "2023-11-20"
    },
    {
        descricao: "Meu gato fazendo cara de bobo",
        imagem: "https://placekitten.com/200/300",
        categoria: "Animais"
    },
    {
        descricao: "Receita deliciosa de bolo de chocolate",
        imagem: "https://loremflickr.com/320/240/food",
        categoria: "Comida",
        ingredientes: ["chocolate", "ovos", "farinha", "leite"]
    },
    {
        descricao: "Citação inspiradora sobre a vida",
        autor: "Albert Einstein",
        texto: "A imaginação é mais importante que o conhecimento."
    },
    {
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

app.get("/posts",(req,res)=>{
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