const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/v1/theses', (req, res) => {
  const { topic, field, pages, style } = req.body;

  if (topic && field && pages && style) {
    // In a real application, you would save this to a database
    // and generate a thesis outline.
    console.log({ topic, field, pages, style });
    res.status(201).json({ message: 'Thesis creation started.' });
  } else {
    res.status(400).json({ error: 'Missing required fields.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
