# SiteConnect (siteconnet)

Aplicação front-end em **React + Vite** com páginas voltadas a **conectar empresas e pessoas a projetos sociais**, com navegação via **React Router** e componentes reutilizáveis para cards de ações (doação, voluntariado, mentoria e eventos).

## Deploy na vercel

https://siteconnet.vercel.app/

## ✨ Visão geral

O projeto apresenta:

- **Página inicial** com chamada para “Cadastrar Empresa” e indicadores de impacto
- Páginas temáticas com **cards informativos** para:
  - Doação
  - Voluntariado
  - Mentoria
  - Eventos & Palestras
- Página de **perfil do usuário**
- Layout base com **Header** (menu responsivo) e **Footer**

A cada clique nos botões dos cards, é exibido um **toast de sucesso** usando **SweetAlert2**. :contentReference[oaicite:0]{index=0}

---

## 🧰 Tecnologias

- **React** :contentReference[oaicite:1]{index=1}
- **Vite** :contentReference[oaicite:2]{index=2}
- **React Router DOM** (rotas) :contentReference[oaicite:3]{index=3}
- **Sass (SCSS Modules)** :contentReference[oaicite:4]{index=4}
- **SweetAlert2** (toast/alertas) :contentReference[oaicite:5]{index=5}
- **React Icons** :contentReference[oaicite:6]{index=6}

---

## 🗺️ Rotas da aplicação

As rotas estão definidas em `src/App.jsx`: :contentReference[oaicite:7]{index=7}

| Rota            | Página              |
| --------------- | ------------------- |
| `/`             | Página Inicial      |
| `/doacao`       | Doação              |
| `/voluntariado` | Voluntariado        |
| `/mentoria`     | Mentoria            |
| `/eventosEP`    | Eventos & Palestras |
| `/usuario`      | Perfil do Usuário   |

---

## 🧩 Componentes principais

### `Header`

- Logo com link para home
- Menu com links (desktop)
- Menu “do usuário” (abre/fecha) clicando no avatar
- Comportamento responsivo via `resize` e controle de `isMobile` :contentReference[oaicite:8]{index=8}

### `InfoCard`

Componente reutilizável que recebe props (`img`, `alt`, `subtitulo`, `paragrafo`, `segParagrafo`, `textBotao`) e dispara um toast de sucesso ao clicar no botão. :contentReference[oaicite:9]{index=9}

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js (recomendado: versão LTS)
- npm (ou yarn/pnpm)

### Instalação

```bash
# 1) Clone o repositório
git clone https://github.com/cauefb/siteconnet.git

# 2) Entre na pasta
cd siteconnet

# 3) Instale as dependências
npm install

# 4) Rode o comando
npm run dev
```
