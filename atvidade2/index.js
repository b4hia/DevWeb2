const express = require("express"); // Express
const path = require("path"); // Biblioteca para trabalhar com caminhos no computador

const app = express(); // Instânciando a aplicação

app.set('views', path.join(__dirname, '/views')); //diretório onde estão os arquivos
app.set('view engine', 'ejs'); // configurando a engine

app.get('/', (req, res) =>{
    res.render('index', {route: 'Rota 1'});
});

app.get('/contato', (req, res) =>{
    res.render('index2', {route: 'Rota 2'});
});

app.get('/home', (req, res) =>{
    res.render('index3', {route: 'Rota3'});
});
app.listen(3000, () => //porta que o servidor vai rodar, neste caso: 127.0.0.1:3000
console.log('Servidor iniciado na porta 3000')
);