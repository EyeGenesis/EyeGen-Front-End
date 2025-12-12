# ✨🕶️ EyeGen Front-end: Acessibilidade e inclusão por meio da tecnologia
<img width="100%" height="325" alt="Frame 1686551777 (1)" src="https://github.com/user-attachments/assets/5385fcb1-248a-41ae-9025-7266f5604f86" />

## Sobre o Projeto

🛍️ A plataforma do **EyeGen** é voltada para divulgação e venda do **EyeGlass**, um óculos com Inteligência Assistiva focado em auxiliar no dia a dia de pessoas com deficiência visual.

#### **Nosso objetivo é:**

- 🕶️Apresentar o produto e suas funcionalidades
- 💳 Detalhar nossos planos
- 🏢 Contar sobre a empresa
- 🛠️ Fornecer suporte aos nossos usuários
- ♿ Garantir uma experiência acessível, intuitiva e inclusiva
-  🐶 Sanar todas as dúvidas através de nosso chatbot

``Esta documentação descreve as principais funcionalidades do Front-end do EyeGen.``

No EyeGen, temos como principal propósito entregar uma plataforma **inclusiva**, permitindo que todos os usuários **naveguem de forma clara e facilitada**. O fluxo de navegação foi pensado especialmente para pessoas com deficiência visual, oferecendo uma **interface amigável, intuitiva e acessível para todas as idades.**

**🔗 Conheça nosso site:**
[Site do EyeGen](https://www.eyegen.com.br)

## 💻 Tecnologias Utilizadas

- React.js
- JavaScript 
- Vite  
- CSS Modules (para estilização)  
- Axios (para consumir o backend)  
- React Hooks  
- Chatbot integrado (API Google Gemini)  
- Framer Motion (animações durante o scroll)

### 🧑🏼‍🦯 **Acessibilidade** 

- VLibras  
- Web Accessibility  
- SpeechRecognition (chat de voz e navegação por voz)

### 🚀 **Deploy**

- **Vercel**

---

## ⭐ Principais Funcionalidades

### 🛒 **Fluxo de compra do EyeGlass**

- Exibição detalhada do produto e descrições técnicas  
- Seleção do plano no momento da compra  
- Integração com API de pagamento  
- Tela de confirmação de compra concluída  

### 📦 **Assinatura dos Planos**

- Listagem dos planos disponíveis:
  - 🟦**Origin**: gratuito, incluso ao adquirir o EyeGlass  
  - 🟩**Infinity**: plano intermediário com recursos extras  
  - 🟧**Guardian**: plano premium com segurança e suporte estendido  
- Validação do usuário logado para adquirir assinatura  
- Exibição do plano ativo após a compra

### 🔐 **Login**

- Formulário de autenticação (e-mail e senha)  
- Redirecionamento para a página inicial e criação de página do perfil  
- Login com Google, Apple e Facebook

### 📝 **Cadastro**

- Formulário com validações  
- Redirecionamento automático para a página de login  

### 🛠️ **Formulário de Suporte Técnico**

- Campos: nome, e-mail, assunto e mensagem  
- Validações e feedback ao usuário  

---

## 🌐 Funcionalidades Gerais do Site

### 🎤 **Navegação por Voz**

- Ativação/desativação na header (ícone da Geny)  
- Uso de SpeechRecognition  
- Redirecionamento automático para a página solicitada

### 🤖 **Chatbot Geny**

- Assistente virtual integrada ao frontend  
- Ajuda com dúvidas sobre planos, produto, conta e navegação  
- Interface flutuante disponível em todas as páginas  
- Suporte a comandos por voz  

### 🌍 **Multilinguagem (pt-BR / en-US)**

- Alternância no header  
- Implementado com React Hooks (useContext, useState, createContext)  
- Textos estruturados em ambas as línguas  

---

## 🗺️ Rotas

| Rota         | Descrição  |
|--------------|------------|
| `/`          | Home       |
| `/produto`   | EyeGlass   |
| `/planos`    | Planos     |
| `/sobre-nos`     | Sobre nós  |
| `/suporte`   | Suporte    |
| `/login`     | Acesso     |
| `/cadastre-se`     | Cadastro     |
| `/comprar`     | Compra     |

---

## 📂 Estrutura do Projeto
````
EyeGen_Front-End/
├── api
│   ├── chat.js
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexto/
│   ├── services/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── ScrollToTop.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

````

## 🧭 Jornada do Usuário

Acesse a jornada completa aqui: [Em Breve]

## 🎨 Design System

- Em Breve

## 🧰 Pré-Requisitos para Rodar Localmente

- Node.js

- npm

- Git

## ▶️ Como Executar Localmente

### Clone o repositório:

``git clone https://github.com/EyeGenesis/EyeGen-FrontEnd.git``

### Entre no diretório:

``cd eyegen-frontend``


### Instale as dependências e rode o projeto:

````
npm install
npm run dev
````

***O site estará disponível na porta 5173.***

### 📄 Licenças

Este projeto é distribuído sob a licença MIT.

***©2025 EyeGen. Todos os Direitos Reservados***
