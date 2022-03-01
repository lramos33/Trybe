const express = require('express');
const error = require('./middleware/error');
const router = require('./controller/routes')

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/paymentOption', router.paymentOptionRouter);

app.use(error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));