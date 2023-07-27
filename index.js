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
  {
    client: "losingmymind",
    content: "asjndasjndjaskndjknasjk",
  },
  {
    client: "xd",
    content: "xD",
  },
];

app.get("/clients", (req, res) => {
  res.json(clients);
});

app.post("/add", (req, res) => {
  const { value } = req.body;

  if (value !== undefined) {
    myArray.push(value);
    res.json({ message: "Element added to the array", array: myArray });
  } else {
    res.status(400).json({
      error: "Invalid request. Please provide a value in the request body.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
