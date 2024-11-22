export async function listaPosts(req,res){
    //chama função para buscar todos os posts
    const posts = await getTodosPosts();
    res.status(200).json(posts);
};
    
