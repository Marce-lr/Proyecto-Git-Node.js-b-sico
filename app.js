const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("¡Git + Node.js básico! servidor con Node.js y Express.");
});

app.get("/endpoint1", (req, res) => {
  res.send("¡Este es el Endpoint 1!");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
