import express from "express";

//local aonde ficaram armazenadas todas as rotas da aplicação
const routes = (app)=>{
    //permite que o serviro interprete requisições com corpo JSON
    app.use(express.json());
    
    //rota para buscar todos os posts 
    app.get("/posts",async (req,res)=>{
        //chama função para buscar todos os posts
        const posts = await getTodosPosts();
        res.status(200).json(posts);
    });
}

export default  routes;