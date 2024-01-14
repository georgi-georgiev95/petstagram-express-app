const app = require('./config/expressConfig');
const { PORT } = require('./utils/constants');


app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));