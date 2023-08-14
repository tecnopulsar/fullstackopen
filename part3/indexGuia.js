const express = require("express");
const mongoose = require("mongoose");

var morgan = require("morgan");

const password = process.argv[2];
const newName = process.argv[3];
const newNumber = process.argv[4];

const url = `mongodb+srv://tecnopulsar:${password}@cluster0.jxidmin.mongodb.net/guia-app?retryWrites=true&w=majority`;
mongoose.connect(url);
const guiaSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
});
const Guia = mongoose.model("Guia", guiaSchema);

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (request, response) => {
  response.send("<h1>Guia Telefonica</h1>");
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

app.get("/info", (req, res) => {
  res.send(`<h1>Numero de usuarios registrados ${persons.length}</h1>
  <h2>${new Date()}</h2>`);
});

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxId + 1;
};
app.post("/api/persons", (request, response) => {
  const body = request.body;
  const { name, number } = body;

  if (!name || !number) {
    return response.status(400).json({
      error: "Falta ingresar wl nombre o el número",
    });
  }
  let personFinded = persons.filter(
    (person) => person.name.toLowerCase() === name.toLowerCase()
  );
  if (personFinded.length > 0) {
    return response.status(400).json({ error: "El nombre debe ser único" });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});

if (process.argv.length === 3) {
  Guia.find({}).then(result => {
    result.forEach(guia => {
      console.log(guia)
    })
    mongoose.connection.close()
  })
}
// Creacion de un documento en la base de datos Guias por linea de comando
if (process.argv.length === 5) {
  // const person1 = new Guia({
  //   name: "Arto Hellas",
  //   number: "040-123456",
  //   date: new Date(),
  // });
  // person1.save().then((result) => {
  //   console.log("persona guardada!");
  // mongoose.connection.close();
  // });
  const person = new Guia({
    name: newName,
    number: newNumber,
    date: new Date(),
  });
  person.save().then((result) => {
    console.log(`agregada ${newName}, numero ${newNumber} a la guia telefonica`);
    mongoose.connection.close();
  });
}

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
