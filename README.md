# 🎮 Lista de Jogos Favoritos

## 📋 Descrição

Este projeto consiste em uma aplicação web desenvolvida utilizando apenas **HTML**, **CSS** e **JavaScript puro**, sem o uso de frameworks, bibliotecas externas ou backend.

A aplicação simula um sistema simples de cadastro de jogos favoritos, permitindo que o usuário realize login e gerencie uma lista de jogos através das operações de CRUD (Create, Read, Update e Delete).

---

## 🚀 Funcionalidades

### 🔐 Sistema de Login

A aplicação inicia exibindo apenas a tela de login.

**Credenciais válidas:**

* Usuário: `aluno`
* Senha: `fiap2025`

### Validações

* Não permite campos vazios.
* Exibe mensagens de erro na interface.
* Valida usuário e senha antes de liberar acesso ao sistema.

---

## 🎮 Gerenciamento de Jogos

Após o login, o usuário tem acesso à lista de jogos favoritos.

### Jogos iniciais

* Minecraft
* Valorant
* League of Legends

### Operações CRUD

#### ➕ Create (Adicionar)

Permite:

* Adicionar um jogo no início da lista utilizando `unshift()`.
* Adicionar um jogo no final da lista utilizando `push()`.

#### 📖 Read (Listar)

* Exibe todos os jogos cadastrados.
* Atualiza automaticamente a interface após qualquer alteração.

#### ✏️ Update (Editar)

* Permite editar qualquer jogo da lista.
* Caso o usuário cancele a edição, o valor original é mantido.
* Caso seja informado um valor vazio, a alteração não é realizada.

#### ❌ Delete (Remover)

* Remove jogos individualmente.
* A remoção é feita pelo índice do item utilizando `splice()`.

---

## 🚪 Logout

O sistema possui uma funcionalidade de logout que:

* Oculta a tela principal.
* Retorna para a tela de login.
* Limpa os campos de autenticação.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6

---

## 📂 Estrutura do Projeto

```text
projeto/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🎯 Objetivos de Aprendizagem

Este projeto foi desenvolvido para praticar conceitos fundamentais de desenvolvimento web, incluindo:

* Manipulação do DOM
* Eventos JavaScript
* Estruturas de dados (Arrays)
* Operações CRUD
* Validação de formulários
* Organização de código em funções
* Responsividade com CSS

---

## ▶️ Como Executar

1. Baixe os arquivos do projeto.
2. Certifique-se de que os arquivos estejam na mesma pasta:

   * index.html
   * style.css
   * script.js
3. Abra o arquivo `index.html` em qualquer navegador moderno.

Não é necessário instalar dependências ou executar servidor.

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos como prática de HTML, CSS e JavaScript puro.
