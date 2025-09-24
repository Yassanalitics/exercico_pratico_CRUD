crud-escola/
├─ index.js
├─ routes/
│ ├─ alunos.js
│ └─ professores.js
├─ package.json
└─ README.md

Campos dos cadastros

Alunos
id (gerado)
nome
email
cpf
telefone
dataNascimento

Professores
id (gerado)
nome
email
cpf
curso
disciplina

Passos detalhados

Parte 1: Configuração do Repositório GitHub (Membro 1)
1. Membro 1 cria um novo repositório no GitHub:
Acesse github.com e faça login
Clique em "New repository"
Nome: crud-escola
Mantenha público
Clique em "Create repository"
2. Membro 1 adiciona o Membro 2 como colaborador:

No repositório criado, vá em "Settings"
No menu lateral, clique em "Collaborators"
Clique em "Add people"
Digite o username do GitHub do Membro 2
Clique em "Add [username] to this repository"

3. Membro 2 aceita o convite:
Verifique seu email ou notificações do GitHub
Aceite o convite de colaboração

Parte 2: Clonagem e Configuração Inicial

4. Ambos os membros clonam o repositório usando VS Code:
No VS Code, abra a Command Palette ( Ctrl+Shift+P )
Digite "Git: Clone" e selecione a opção
Cole a URL do repositório
Escolha uma pasta no seu computador para salvar o projeto
Abra o projeto clonado no VS Code

5. Membro 1 configura a estrutura inicial do projeto:
Abra o terminal integrado do VS Code ( Ctrl+Shift+' )
Execute os comandos:
npm init -y
npm install express cors
npm install --save-dev nodemon

6. Membro 1 cria a estrutura de pastas e arquivos básicos:
Criar pasta routes/
Criar index.js com a estrutura básica (veja exemplo abaixo)
Configurar scripts no package.json :
"scripts": {
"start": "nodemon index.js",
"test": "echo \"Error: no test specified\" && exit 1"
}

Exemplo do index.js inicial:

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
// TODO: Membro 1 - Importar e mapear rota de alunos

// TODO: Membro 2 - Importar e mapear rota de professores

app.listen(3000, () => {
console.log('Server is running on http://localhost:3000')
})

7. Membro 1 cria o arquivo .gitignore :
Acesse gitignore.io
Digite "Node" na caixa de pesquisa
Clique em "Create" para gerar o conteúdo
Copie o conteúdo gerado e crie o arquivo .gitignore na raiz do projeto
Cole o conteúdo no arquivo

8. Membro 1 faz commit e push da estrutura inicial usando Source Control:
No VS Code, clique no ícone do Source Control na barra lateral (terceiro ícone)
Você verá todos os arquivos modificados listados
Clique no "+" ao lado de cada arquivo para adicionar ao stage (ou clique no "+" no
cabeçalho para adicionar todos)
Digite a mensagem de commit: "feat: configuração inicial do projeto"
Clique em "Commit" (ícone de ✓)
Clique em "Sync Changes" ou use o botão "Push" para enviar ao GitHub

9. Membro 2 atualiza seu repositório local:
No Source Control do VS Code, clique no menu "..." (três pontos)
Selecione "Pull" para baixar as mudanças do repositório
Parte 3: Desenvolvimento dos CRUDs

9. Divisão de tarefas:
Membro 1: implementa CRUD de Alunos ( routes/alunos.js )
Membro 2: implementa CRUD de Professores ( routes/professores.js )

10. Cada membro cria sua branch para desenvolvimento usando Source Control:
No VS Code, clique na branch atual (geralmente "main") na barra de status inferior
Selecione "Create new branch..."
Membro 1: digite "feat/crud-alunos"
Membro 2: digite "feat/crud-professores"
Pressione Enter para criar e trocar para a nova branch

11. Implementação individual:
Cada membro implementa seu CRUD completo em sua respectiva branch
Criar array inicial com pelo menos 2 registros de exemplo
Implementar todos os endpoints: GET, GET/:id, POST, PUT/:id, DELETE/:id
Incluir validações básicas (campos obrigatórios, duplicatas)
IMPORTANTE: Após criar o arquivo do router, importe o router corretamente no index.js :
Membro 1: importar o router de alunos no index.js
Membro 2: importar o router de professores no index.js
Teste sua funcionalidade executando: npm start

12. Commits e push individuais usando Source Control:
Após implementar o CRUD, vá para o Source Control no VS Code
Adicione todos os arquivos modificados ao stage (clique no "+" de cada arquivo)
Digite a mensagem de commit: "feat: implementa CRUD de [alunos/professores]"
Clique em "Commit"
Clique em "Publish Branch" (primeira vez) ou "Sync Changes" para enviar a branch ao GitHub
Parte 4: Integração e Merge
13. Cada membro abre um Pull Request:
No GitHub, clique em "Compare & pull request"
Título: "feat: adiciona CRUD de [Alunos/Professores]"
Adicione descrição explicando o que foi implementado
Clique em "Create pull request"
14. Merge dos Pull Requests:
Faça merge dos PRs na branch main
Delete as branches de feature após o merge
15. Atualização final:
No Source Control, clique na branch atual e selecione "main" para voltar à branch principal
Clique no menu "..." e selecione "Pull" para baixar todas as mudanças integradas

Parte 5: Testes
16. Testagem da API:
Execute o servidor: npm start
Teste todos os endpoints usando Postman ou similar
Verifique se ambos os CRUDs estão funcionando corretamente
Endpoints esperados

Alunos
GET /alunos - Listar todos os alunos
GET /alunos/:id - Buscar aluno por ID
POST /alunos - Criar novo aluno
PUT /alunos/:id - Atualizar aluno
DELETE /alunos/:id - Deletar aluno

Professores
GET /professores - Listar todos os professores
GET /professores/:id - Buscar professor por ID
POST /professores - Criar novo professor
PUT /professores/:id - Atualizar professor
DELETE /professores/:id - Deletar professor

Dicas importantes
Comuniquem-se durante o desenvolvimento
Façam commits frequentes com mensagens descritivas
Testem os endpoints conforme implementam
Resolvam conflitos de merge juntos se aparecerem
Mantenham o código organizado e comentado