const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials'
  })
);

app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));

const logo = 'https://raw.githubusercontent.com/zoriananychkalo/Web-Design-Fundamentals-Project/main/images/logo.png';

function renderPage(res, view, title, keywords, state = {}) {
  res.render(view, {
    state,
    head: {
      title,
      keywords,
      logo
    }
  });
}

app.get('/', (req, res) => {
  renderPage(res, 'index', 'biomes', 'Earth, ecosystems, species', {home: true});
});

app.get('/species', (req, res) => {
  renderPage(res, 'species', 'species', 'Species, elephant & frog, macaw', {species: true});
});

app.get('/map', (req, res) => {
  renderPage(res, 'map', 'map', 'Map, biomes', {map: true});
});

app.get('/about', (req, res) => {
  renderPage(res, 'about', 'about', 'Biomes, plant & animal', {about: true});
});

app.get('/learnmore', (req, res) => {
  renderPage(res, 'learnmore', 'learn more', 'Learn more, biomes', {about: true});
});

app.get('/newspaper', (req, res) => {
  renderPage(res, 'newspaper', 'newspaper', 'Newspaper, panda');
});

app.get('/contact', (req, res) => {
  renderPage(res, 'contact', 'contact', 'Contact page, biomes', {contact: true});
});

app.get('/team', (req, res) => {
  renderPage(res, 'team', 'our team', 'Team, biomes', {team: true});
});

app.get('/tropicalrainforest', (req, res) => {
  renderPage(res, 'tropicalrainforest', 'tropical rainforest', 'Tropical rainforest, layer, type');
});

app.get('/desert', (req, res) => {
  renderPage(res, 'desert', 'desert', 'Desert, Plants & Animals');
});

app.get('/arctic', (req, res) => {
  renderPage(res, 'arctic', 'arctic', 'Arctic, ecosystems & animals');
});

app.get('/savanna', (req, res) => {
  renderPage(res, 'savanna', 'savanna', 'Savanna, Plants & Animals');
});

app.get('/ocean', (req, res) => {
  renderPage(res, 'ocean', 'ocean', 'Ocean, Earth & ecosystem');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
