const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.listen(3000, () => console.log('Server listening on port 3000'));