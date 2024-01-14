const app = require('./config/expressConfig');
const { PORT } = require('./utils/constants');
const handlebars = require('./config/handlebarsConfig');

handlebars(app);

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));