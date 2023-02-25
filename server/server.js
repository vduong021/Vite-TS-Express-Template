const express = require ('express');
const path = require ('path');
const router = require ('./routes/api');

const app = express();
const port= 5555;
// const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})

app.use('/api', router);

// Default 404 handler
app.use('*', (req, res) => {
  res.status(404)
  .send(
    'Page not found'
  );
});

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`)
})