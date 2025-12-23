# Gym Quest — Mobile App

Aplicativo mobile do **Gym Quest**, desenvolvido com foco em organização, clareza de fluxo e experiência do usuário.  
Este repositório contém **exclusivamente o frontend** da aplicação, responsável pela interface, navegação e consumo da API.

O backend do projeto está em um repositório separado, garantindo desacoplamento, escalabilidade e melhor organização arquitetural.

---

## 🎯 Propósito do Projeto

O Gym Quest é um aplicativo de acompanhamento de treinos que tem como objetivo:

- Organizar workouts de forma diária e semanal
- Incentivar consistência através de sistema de XP e progresso
- Facilitar o controle de exercícios concluídos
- Oferecer uma experiência simples, fluida e visualmente clara

Este frontend foi pensado para **conversar diretamente com a API**, refletindo fielmente as regras de negócio definidas no backend.

---

## 🧱 Stack e Tecnologias

- **Expo (React Native)**
- **TypeScript**
- **React Navigation**
- **Axios** (requisições HTTP)
- **JWT** (autenticação via API)
- **Design Tokens** (cores, espaçamentos, tipografia)

---

## 🗂️ Estrutura de Pastas

A estrutura foi pensada para escalar sem complexidade excessiva:

src/
├── assets/ # Imagens, ícones e recursos estáticos
├── components/ # Componentes reutilizáveis (Button, Card, etc)
├── navigation/ # Configuração de navegação e fluxos
├── screens/ # Telas do aplicativo
├── services/ # Comunicação com a API (Axios)
├── theme/ # Design tokens (cores, spacing, radius, fonts)
├── types/ # Tipagens globais
└── utils/ # Funções utilitárias

yaml
Copiar código

---

## 🧭 Fluxo de Navegação

O aplicativo possui três grandes fluxos:

### 1. Onboarding
- 3 telas introdutórias
- Swipe horizontal entre as telas
- Apresentação do propósito do app
- Indicador de progresso (dots)
- Última tela com CTA para login/cadastro

### 2. Autenticação
- Login
- Registro
- Integração com API
- Tratamento de erros padronizado

### 3. Aplicação (App)
- Home com visão geral do usuário
- Workouts diários e semanais
- Execução de workout via modal
- Perfil do usuário com dados editáveis
- Histórico de workouts concluídos

---

## 🎨 Design System

O projeto utiliza **design tokens centralizados**, garantindo consistência visual:

- **Cores:** definidas em `theme/colors.ts`
- **Spacing:** padding horizontal padrão de `24`
- **Tipografia:**
  - Títulos → **Roboto**
  - Textos → **Inter**
- **Radius:** padronizado para cards, botões e modais

Nenhuma cor ou espaçamento deve ser usado diretamente nos componentes sem passar pelos tokens.

---

## 🔐 Integração com Backend

- Autenticação via **JWT**
- Headers padronizados
- Tratamento de erros centralizado
- Backend desenvolvido em NestJS + Prisma

📎 Repositório da API:  
> _(link do backend aqui)_

---

## 🚧 Status do Projeto

- [x] Planejamento de fluxo e UX
- [x] Estrutura inicial do projeto
- [x] Design tokens definidos
- [ ] Onboarding
- [ ] Autenticação
- [ ] Home
- [ ] Workouts
- [ ] Perfil do usuário

O desenvolvimento segue uma abordagem **incremental**, com foco em aprendizado e qualidade.

---

## 📌 Observações Importantes

- Este frontend **não replica regras de negócio**
- Toda validação crítica vem da API
- O app reflete exatamente os contratos definidos no backend
- O objetivo é clareza, não complexidade excessiva

---

## 👤 Autor

Projeto desenvolvido por **Junior Bonini**  
Com foco em evolução técnica, organização e boas práticas.
