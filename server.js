import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(cors());

// load JSON (works reliably in ESM)
const jsonData = JSON.parse(
  fs.readFileSync(new URL('./model.json', import.meta.url), 'utf8')
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get('/api/model', (req, res) => {
  res.json(jsonData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
