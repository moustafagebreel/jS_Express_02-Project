import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/products.js';


const app = express();

app.use(bodyParser.json());

app.use('/', productRoutes);


app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(5000, () => {
console.log('Listening on http://localhost:5000');
});
