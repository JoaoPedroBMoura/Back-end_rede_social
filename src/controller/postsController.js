import {getTodosPosts,criarPost} from "../model/postsModel.js";

export async function listaPosts(req,res){
    //chama função para buscar todos os posts
    const posts = await getTodosPosts();
    res.status(200).json(posts);
};
    
export async function postarNovoPost(req,res) {
    const novoPost = req.body;

    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado)
    } catch{
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}