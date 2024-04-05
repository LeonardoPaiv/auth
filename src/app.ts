
import cors from 'cors';
import express from 'express';
import firebaseToken from './middlewares/firebaseAuth';

const app = express();
const port = 3000;

app.use(cors())
app.use(firebaseToken)


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
