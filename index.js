const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
