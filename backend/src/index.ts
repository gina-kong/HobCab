import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Pinterest OAuth Backend Running!'));

export default app;
