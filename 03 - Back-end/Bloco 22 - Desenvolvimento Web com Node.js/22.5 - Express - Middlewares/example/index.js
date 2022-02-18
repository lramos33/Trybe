const express = require('express');
const authMiddleware = require('./auth-middleware');
const recipesRouter = require('./recipesRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/closed', authMiddleware, function (req, res) {
  res.send('closed!')
});

// Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador.
app.use('/recipes', recipesRouter);

app.all('*', function (req, res) {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });