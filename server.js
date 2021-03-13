import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

//init middleware:
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
