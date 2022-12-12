const express = require('express');

const app = express(); // Iniciando o express e passando a sua inicialização para a constante
const port = 2000


app.get('/', (request, response) => {
    const { color } = request.query;
    if(color){
        response.send(`a cor passada no query params é ${color}`)
    }else{
        response.send("Não tem query params passando ")
    }
})

//Trabalhando com params opcionais
app.get('/hello/:name?', (request, response) => {
    const { name } = request.params;

    if(name){
        response.send(`Olá ${name} sejá bem-vindo`)
    }else{

        response.send("<h1>About US</h1>")
    }
})

//Trabalhando com params
app.get('/contact/:name', (request, response) => {
    const { name } = request.params;
    response.send(name);
})

app.listen(port, function(err){
    if(err){
        console.error(err)
    }else{
        console.log(`Serving initialized in success! http:localhost:${port}👌`)
    }
})