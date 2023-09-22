import Express from 'express';
import cors from 'cors';
import db from './db.js';
const PORT = process.env.PORT || 3000;

const app = Express();

app.use(cors('*'));

app.get('/companies', (req, res) => {
  const companies = db.getAllData();
  res.status(200).json(companies);
});

app.listen(PORT, () => {
  console.log(`Server is listening at localhost:${PORT}`);
});
