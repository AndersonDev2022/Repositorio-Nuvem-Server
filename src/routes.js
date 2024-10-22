
import { Router } from "express";

const routes = new Router();

routes.get('/i-am-on-the-server',function(request,response){
    return response.status(200)
    .json({message:'I am on the server. Hello Anderson.'});
})


export default routes;