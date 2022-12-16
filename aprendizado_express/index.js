const express = require("express");
const app = express();

app.set('view engine', 'ejs');//Dizendo para o express usar o EJS como view engine

app.get('/:name?/:idade?', (request, response) => {
    const { name, age} =  request.params;
    const msg = false;
    const produts = [
        {
            name: "Bolacha",
            preco: 2.00,
        },
        {
            name: "Sucrilhos",
            preco: 12.50,
        },
        {
            name: "Maionese",
            preco: 7.00
        }
    ]

    response.render('index', {
        name,
        age,
        msg,
        produts
    });  
})

app.listen(2323, () => console.log('Server in running 👌'));