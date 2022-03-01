const express = require('express');
const routers = require('./controller/routes')
const error = require('./middleware/error');
const auth = require('./middleware/auth');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/song', auth, routers.songRouter);
app.use('/login', routers.loginRouter);

app.use(error);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));