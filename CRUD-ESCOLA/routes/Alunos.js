//Inicializando o crud alunos
const express = require('express')
const router = express.Router()
// criando a lista de alunos
let listaAlunos = [
  {
    id: 1,
    nome: "Lucas Guilherme",
    email: "gui@lherme.com",
    cpf: "00100100101",
    telefone: "61 995328645",
    dataNascimento: "01/03/2008"
  },
  {
    id: 2,
    nome: "Julia Campos",
    cpf: "00200200202",
    telefone: "61 995328645",
    email: "Julia@Campos.com",
    dataNascimento: "01/01/2005"
  },
]
// GET /alunos - Listar todos os alunos
//o router vai pegar como parametro "/alunos"
router.get('/alunos', (req, res, next) => {
  res.json(listaAlunos) //a resposta obtida do json traz a lisat de alunos
})

// GET /alunos/:id - Buscar aluno por ID
router.get('/alunos/:id', (req, res, next) => { //entrou "id" no parametro
  // recebendo o ID como parametro dinâmico
  const id = req.params.id
  // busca na lista de alunos o id pesquisado
  const aluno =listaAlunos.find(aluno => aluno.id == id)
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!" })
  }
  res.json(aluno) //retorna a aluno com o id
})

// POST /alunos - Criar novo aluno
router.post('/alunos', (req, res, next) => { //aqui o router "posta" ums aluno
  const { nome, cpf, telefone, email, dataNascimento } = req.body
  // Validando se todos os campos foram preenchidos
  if (!nome || !cpf || !email || !telefone || !dataNascimento) {
    return res.status(400).json({ error: "Nome, cpf, email, telefone e DataNascimento são obrigatórios!" })
  }

  // validar se o cpf já foi cadastrado
  if (listaAlunos.some(aluno => aluno.cpf == cpf)) {
    return res.status(409).json({ error: "CPF já cadastrado!!" })
  }

  const novoAluno = { //id gerado
    id: Date.now(),
    nome,
    cpf,
    telefone,
    email,
    dataNascimento
  }

listaAlunos.push(novoAluno)
  res.status(201).json({ message: "Aluno cadastrado com sucesso", novoAluno })
})

// PUT /alunos/:id - Atualizar aluno
router.put('/alunos/:id', (req, res, next) => {
  const id = req.params.id
  const aluno = listaAlunos.find(aluno => aluno.id == id)
  // valido se a o aluno esta cadastrado
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!" })
  }
  // validando os dados pra atualizar a requisição
  const { nome, email, telefone, dataNascimento } = req.body
  if (!nome || !email ||  !telefone|| !dataNascimento) {
    return res.status(400).json({ error: "nome, email, telefone e dataNascimento são obrigatórios!!!" })
  }
  // atualiza os dados do aluno
  aluno.nome = nome
  aluno.email = email
  aluno.telefone = telefone
  aluno.dataNascimento = dataNascimento
  // responde com os dados da aluno atualizados 
  res.json({ message: "aluno atualizado com sucesso!!!", aluno })
})

// DELETE /alunos/:id - Deletar aluno

router.delete('/alunos/:id', (req, res, next) => {
  const id = req.params.id
  // validar se o aluno não existe
  const aluno =listaAlunos.find(aluno => aluno.id == id)
  if (!aluno) {
    return res.status(404).json({ error: "aluno não encontrada!!!"})
  }

 listaAlunos =listaAlunos.filter(aluno => aluno.id != id)
  res.json({ message: "Aluno excluida com sucesso!!!"})
})


// exportar o roteador
module.exports = router