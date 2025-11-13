import express from 'express';

const app = express();
// app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'This is from the backend.' });
});

export default app;
