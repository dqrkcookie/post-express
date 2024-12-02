import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

let sample_db = [
  { id: 1, name: 'Hu Tao', display_name: 'Homa' },
  { id: 2, name: 'Kokomi', display_name: 'Fish' },
  { id: 3, name: 'Xiangling', display_name: 'Chef' },
  { id: 4, name: 'Sayu', display_name: 'Ninja' },
  { id: 5, name: 'Gorou', display_name: 'Dog' },
];

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(`<h1> HOME </h1>`);
});

app.get('/players', (req, res) => {
  res.send(sample_db);
});

app.post('/players', (req, res) => {
  // console.log(req.body);
  const player = req.body;
  // console.log({ ...player });

  const new_player = { id: sample_db[sample_db.length - 1].id + 1, ...player };

  sample_db.push(new_player);

  if (new_player) return res.status(201).send(sample_db);
});
