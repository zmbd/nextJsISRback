const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
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
  {
    client: "losingmymind",
    content: "asjndasjndjaskndjknasjk",
  },
  {
    client: "xd",
    content: "xD",
  },
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get("/clients", (req, res) => {
  res.json(clients);
});

app.post("/", (req, res) => {
  let data = req.body;
  res.send("Data Received: " + JSON.stringify(data));
});

app.post("/array", (req, res) => {
  const { value } = req.body;
  console.log(req.body);

  if (value !== undefined) {
    // Handle the request with the provided value
    // ...
    res.json({ message: `Request all gucci ${value}` });
  } else {
    res.status(400).json({
      error: `Invalid request. Please provide a value in the request body.`,
    });
  }
});

app.post("/add", (req, res) => {
  const { client, content } = req.body;

  if (client && content) {
    clients.push({ client: client, content: content });
    res.json({ message: "Element added to the array", array: clients });
  } else {
    res.status(400).json({
      error: "Invalid request. Please provide a value in the request body.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
