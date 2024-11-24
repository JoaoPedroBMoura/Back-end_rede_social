import express from "express";
import multer from "multer";
import { listaPosts, postarNovoPost} from "../controller/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname);
    }
  })
  const upload = multer({ dest: "./uploads" , storage}) // aonde ficarão salvas nosssas imagens temp
//local aonde ficaram armazenadas todas as rotas da aplicação
const routes = (app)=>{
    //permite que o serviro interprete requisições com corpo JSON
    app.use(express.json());
    
    //rota para buscar todos os posts 
    app.get("/posts",listaPosts);
    //rota para criar um novo post
    app.post("/posts",postarNovoPost);
    //rota para mandar imagens
    app.post("/upload",upload.single("imagem"),uploadImagem);

    app.get("/livros",(req,res)=>{
    
        const livro1={
            titulo: "Evangelho falsificado",
            autor: "Roger E. Olson",
            opiniao:"Excelente Livro"
        }
        
        res.status(200).send(livro1);
    })

}

export default  routes;