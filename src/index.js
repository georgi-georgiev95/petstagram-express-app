const app = require('./config/expressConfig');
const { PORT } = require('./utils/constants');
const handlebars = require('./config/handlebarsConfig');
const mongoose = require('./config/dbConfig');

handlebars(app);
mongoose()
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));