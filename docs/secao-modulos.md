# Seção: Módulos ("O método, em 4 pilares")

Segunda seção da página de vendas. Grid de cards apresentando os pilares
do método/curso. Fundo escuro.

## Textos

Diferente das outras seções, o **título da seção está fixo no JSX**
("O método, em 4 pilares" — `PaginaVendas.jsx`, linha 17), não vem de
`curso.js`.

O conteúdo dos cards vem de `src/data/curso.js` → chave `curso.modulos`
(array):

```js
modulos: [
  { titulo: 'Fundamentos', descricao: '...' },
  { titulo: 'Estrutura', descricao: '...' },
  { titulo: 'Constância', descricao: '...' },
  { titulo: 'Crescimento', descricao: '...' },
]
```

Cada item vira um card com `titulo` (h3) e `descricao` (p).

## Estilo

Classes em `src/styles/paginaVendas.css`:

- `.pv-secao.pv-fundo-black` → mesmo container padrão das outras seções.
- `.pv-grid-modulos` → `display: grid`,
  `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))`, `gap: 2rem`.
  Isso faz o grid se reorganizar sozinho conforme o número de módulos e a
  largura da tela — não precisa definir número fixo de colunas.
- `.pv-card-modulo` → borda dourada sutil (`rgba(184, 150, 12, 0.3)`),
  fundo `#0a0a0a`, padding, texto centralizado.
- `.pv-card-modulo h3` → `'Cinzel Decorative'`, dourado.
- `.pv-card-modulo p` → branco a 85% de opacidade.

## Componentes envolvidos

- `src/components/PaginaVendas.jsx` — faz `curso.modulos.map(...)` e
  renderiza um `.pv-card-modulo` por item. Usa `modulo.titulo` como `key`.

## Funcionalidades

- Grid responsivo automático (CSS puro, sem JS) via `auto-fit`.
- Adicionar/remover módulo é só mexer no array — o layout se ajusta
  sozinho, sem tocar em `PaginaVendas.jsx` nem no CSS.

## Como manipular/editar

- **Adicionar/remover/editar um pilar**: editar o array `curso.modulos`
  em `curso.js` (objeto `{ titulo, descricao }`).
- **Trocar o título da seção** ("O método, em 4 pilares"): precisa editar
  direto em `PaginaVendas.jsx` (linha 17), já que não é data-driven. Se
  quiser deixar 100% editável via `curso.js`, seria necessário adicionar
  uma chave nova, tipo `curso.modulosTitulo`, e trocar o hardcode pelo
  valor dessa chave.
- **Mudar largura mínima dos cards antes de quebrar linha**: ajustar o
  `220px` dentro de `minmax(220px, 1fr)` em `.pv-grid-modulos`.