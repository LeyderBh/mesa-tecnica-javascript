const express = require("express")

const app = express()
const puerto = 3000

app.use(express.text())

app.get("/", (req, res) => {
  res.send("Bienvenida comunidad.")
})

app.get("/avisos", (req, res) => {
  res.send("Avisos comunitarios disponibles.")
})

app.get("/campania", (req, res) => {
  res.send("Campaña de comunicación responsable.")
})

app.post("/propuestas", (req, res) => {
  const propuesta = req.body
  res.status(201).send("Propuesta creada: " + propuesta)
})

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada.")
})

app.listen(puerto, () => {
  console.log("Servidor funcionando en http://localhost:3000")
})