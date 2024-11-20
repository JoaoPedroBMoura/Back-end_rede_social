import express from "express";

const app = express();

app.listen(3000,()=> {
console.log("Servidor escutando...");
});

app.get("/api",(req,res)=>{
    res.status(200).send("Boas vindas à imersão Dev Back-end");
})

app.get("/livros",(req,res)=>{
    
    const livro1={
        titulo: "Evangelho falsificado",
        autor: "Roger E. Olson",
        opiniao:"Excelente Livro"
    }
    
    res.status(200).send(livro1);
})