const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const AlunosRouter = require("./routes/Alunos")
app.use(AlunosRouter)

const ProfessoresRouter = require("./routes/Professores")
app.use(ProfessoresRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
