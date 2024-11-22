import express from "express";
import dotenv from 'dotenv';
import routes from "./src/routes/postsRoutes.js";

dotenv.config();

const app = express();
routes(app);

app.listen(3000,()=> {
console.log("Servidor escutando...");
});
