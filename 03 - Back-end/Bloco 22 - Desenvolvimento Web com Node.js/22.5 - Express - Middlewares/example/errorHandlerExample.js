const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

// Captura de erro sem o rescue
// app.get('/:fileName', async (req, res, next) => {
//   try {
//     const file = await fs.readFile(`./${req.params.fileName}`);
//     res.send(file.toString('utf-8'));
//   } catch (e) {
//     next(e);
//   }
// });

// Captura de erro com o rescue
app.get('/:fileName', rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);