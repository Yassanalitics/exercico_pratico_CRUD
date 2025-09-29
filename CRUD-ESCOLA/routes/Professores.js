const express = require('express')
const router = express.Router()

let listaProfessores = [
  {
    id: 1,
    nome: "Carlos Silva",
    email: "carlossilver@hotmail.com",
    cpf: "11111111111",
    curso: "Matemática",
    disciplina: "Cálculo I"
  },
  {
    id: 2,
    nome: "Ana Souza",
    email: "anasouzinha@hotmail.com",
    cpf: "22222222222",
    curso: "Letras",
    disciplina: "Português"
  },
]

router.get('/professores', (req, res) => {
  res.json(listaProfessores)
})

router.get('/professores/:id', (req, res) => {
  const id = req.params.id
  const professor = listaProfessores.find(p => p.id == id)
  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!" })
  }
  res.json(professor)
})

router.post('/professores', (req, res) => {
  const { nome, email, cpf, curso, disciplina } = req.body

  if (!nome || !email || !cpf || !curso || !disciplina) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" })
  }

  if (listaProfessores.some(p => p.cpf == cpf)) {
    return res.status(409).json({ error: "CPF já cadastrado!" })
  }

  const novoProfessor = {
    id: Date.now(),
    nome,
    email,
    cpf,
    curso,
    disciplina
  }

  listaProfessores.push(novoProfessor)
  res.status(201).json({ message: "Professor cadastrado com sucesso!", novoProfessor })
})

router.put('/professores/:id', (req, res) => {
  const id = req.params.id
  const professor = listaProfessores.find(p => p.id == id)

  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!" })
  }

  const { nome, email, curso, disciplina } = req.body
  if (!nome || !email || !curso || !disciplina) {
    return res.status(400).json({ error: "nome, email, curso e disciplina são obrigatórios!" })
  }

  professor.nome = nome
  professor.email = email
  professor.curso = curso
  professor.disciplina = disciplina

  res.json({ message: "Professor atualizado com sucesso!", professor })
})

router.delete('/professores/:id', (req, res) => {
  const id = req.params.id
  const professor = listaProfessores.find(p => p.id == id)

  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!" })
  }

  listaProfessores = listaProfessores.filter(p => p.id != id)
  res.json({ message: "Professor excluído com sucesso!" })
})

module.exports = router
