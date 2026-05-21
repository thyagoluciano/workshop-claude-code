# Workshop: Boas Práticas no Claude Code

Material didático em HTML sobre uso prático do Claude Code, com foco em fluxo de trabalho, contexto, automação, MCP, segurança e uso em times.

O conteúdo está organizado como um site estático, com uma página inicial (`index.html`) que serve como sumário e navegação para os tópicos de cada módulo.

## Visão geral

- **10 módulos** no total
- **48 tópicos publicados** em HTML
- **Módulo 10** listado como conteúdo em preparação
- Conteúdo em **português (pt-BR)**

## Estrutura do repositório

```text
.
├── index.html
├── assets/
│   └── topic-keyboard-navigation.js
├── modulo-01/
├── modulo-02/
├── modulo-03/
├── modulo-04/
├── modulo-05/
├── modulo-06/
├── modulo-07/
├── modulo-08/
└── modulo-09/
```

## Módulos

1. **O que é o Claude Code e como ele pensa**
2. **CLAUDE.md — o "cérebro permanente" do projeto**
3. **Explorar -> Planejar -> Implementar -> Commit**
4. **Prompts eficazes e contexto rico**
5. **Gestão da context window**
6. **MCP — Model Context Protocol**
7. **Hooks — automação e controle de qualidade**
8. **Subagentes, sessões paralelas e Git Worktrees**
9. **Permissões, segurança e prevenção de riscos**
10. **Uso em equipes e ambientes de produção** *(em breve)*

## Como visualizar

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

No macOS:

```bash
open index.html
```

Se preferir rodar com um servidor local:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Objetivo do conteúdo

Este repositório reúne material de workshop para ensinar boas práticas no uso do Claude Code, incluindo:

- estruturação de contexto e prompts
- planejamento e execução de tarefas
- gestão de contexto e documentação viva
- uso de MCP e automações com hooks
- segurança operacional e uso em ambientes de equipe

## Créditos

Conteúdo baseado na documentação oficial da Anthropic e em práticas adotadas pela comunidade.
