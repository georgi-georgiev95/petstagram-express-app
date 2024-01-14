const app = require('./config/expressConfig');
const { PORT } = require('./utils/constants');
const router = require('./router');

app.use(router);
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));