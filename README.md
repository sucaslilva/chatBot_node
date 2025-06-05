
# 🤖 Chatbot em Node.js

Chatbot simples, construído em Node.js com máquina de estados, que permite consultar o CEP usando API públicas ViaCEP.

---

## 🎯 Objetivo

- Criar um chatbot funcional via terminal.
- Utilizar máquina de estados para gerenciar fluxo.
- Consultar APIs públicas para obter dados (CEP na API ViaCEP).
- Implementar logging com Winston para monitoramento.
- Código modular, limpo e organizado.

---

## 🛠 Tecnologias

- Node.js
- Axios (requisições HTTP)
- Winston (logs)
- API:
  - ViaCEP

---

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sucaslilva/chatBot_node.git
cd chatbot-node-cli
```

2. Instale dependências:
```bash
npm install
```

---

## 🚀 Como executar

No terminal, rode:
```bash
node index.js
```

---

## 🧭 Fluxo do chatbot

1. Saudação inicial.
2. Menu:
   - [1] Buscar CEP
   - [2] Consultar CEP
   - [3] Sair
3. Se escolher buscar CEP:
   - Pergunta a UF do estado.
   - Pergunta a cidade.
   - Pergunta o lougradouro.
   - Mostra os CEPs encontrados.
4. Se escolher consultar CEP:
   - Pergunta o CEP.
   - Mostra um texto formatado trazendo lougradouro, bairro, cidade e estado do CEP.
5. Volta ao menu principal.
5. Sair encerra o programa.

Obrigado por conferir o projeto. 🚀
