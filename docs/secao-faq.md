# Seção: FAQ (Perguntas frequentes)

Última seção antes do rodapé. Lista de perguntas e respostas, todas
exibidas abertas ao mesmo tempo (sem accordion/toggle).

## Textos

Assim como em "Módulos", o **título da seção está fixo no JSX**
("Perguntas frequentes" — `PaginaVendas.jsx`, linha 45), não vem de
`curso.js`.

O conteúdo das perguntas vem de `src/data/curso.js` → chave `curso.faq`
(array):

```
faq: [
  { pergunta: 'Preciso ter conhecimento prévio de finanças?', resposta: '...' },
  { pergunta: 'Por quanto tempo tenho acesso?', resposta: '...' },
  { pergunta: 'Tem garantia?', resposta: '...' },
]
```

## Estilo

Classes em `src/styles/paginaVendas.css`:

- `.pv-secao.pv-fundo-ivory` → container padrão.
- `.pv-faq-item` → borda inferior dourada sutil
  (`rgba(184, 150, 12, 0.3)`), `max-width: 640px`, centralizado, um item
  embaixo do outro.
- `.pv-faq-item h4` → `'EB Garamond'`, negrito, dourado (a pergunta).
- `.pv-faq-item p` → branco a 85% de opacidade (a resposta).

## Componentes envolvidos

- `src/components/PaginaVendas.jsx` — faz `curso.faq.map(...)` e
  renderiza um `.pv-faq-item` por pergunta. Usa `item.pergunta` como
  `key`.

## Funcionalidades

- Nenhuma interação: **não é um accordion**. Todas as perguntas e
  respostas ficam visíveis o tempo todo, sem clique pra expandir/recolher.
  Se quiser esse comportamento, precisaria adicionar estado (`useState`)
  em `PaginaVendas.jsx` pra controlar qual item está aberto.

## Como manipular/editar

- **Adicionar/remover/editar uma pergunta**: editar o array `curso.faq`
  em `curso.js` (objeto `{ pergunta, resposta }`) — o layout se ajusta
  sozinho.
- **Trocar o título da seção** ("Perguntas frequentes"): precisa editar
  direto em `PaginaVendas.jsx` (linha 45), mesma observação da seção de
  Módulos.
- **Transformar em accordion**: seria a evolução mais provável aqui —
  guardar o índice do item aberto em `useState` e condicionar a exibição
  da `resposta` a esse estado.