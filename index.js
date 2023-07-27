const express = require("express");
const app = express();
const port = 4848;

const clients = [
  {
    client: "morningstar",
    content: "Yes, hello, I'm Morningstar",
  },
  {
    client: "apollo",
    content: "yesyesyeyseyseyse",
  },
  {
    client: "crazy8",
    content: "crazy 8 DDDDDDDDDD",
  },
  {
    client: "newclient",
    content: "asdadadadadadada",
  },
  {
    client: "super",
    content: "super duper",
  },
];

app.get("/clients", (req, res) => {
  res.json(clients);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
