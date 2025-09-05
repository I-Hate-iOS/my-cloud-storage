const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware base per gestire JSON
app.use(express.json());

// Rotta di test
app.get('/', (req, res) => {
  res.send('Ciao dal backend Express!');
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});