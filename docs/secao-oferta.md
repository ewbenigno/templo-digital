# Seção: Oferta ("Entre no templo")

Seção de preço e call-to-action de compra. Fundo escuro, tudo
centralizado — é a seção que "converte".

## Textos

Fonte dos dados: `src/data/curso.js` → chave `curso.oferta`

```js
oferta: {
  titulo: 'Entre no templo',
  contexto: 'Condição de lançamento por tempo limitado',
  precoDe: 'R$ 397',
  precoPor: 'R$ 197',
  textoBotao: 'Quero começar agora',
  parcelamento: 'ou 12x de R$ 19,70',
}
```

Todos os valores (título, contexto, preço "de", preço "por", parcelamento
e texto do botão) vêm do `curso.js`. Nenhum número ou texto fixo no
componente.

## Estilo

Classes em `src/styles/paginaVendas.css`:

- `.pv-secao.pv-fundo-black.pv-oferta` → `text-align: center` (herda o
  container padrão de `.pv-secao`).
- `.pv-oferta-contexto` → texto pequeno em maiúsculas, dourado, acima do
  preço (exibe `curso.oferta.contexto`).
- `.pv-titulo` → mesmo estilo dourado das outras seções.
- `.pv-preco-de` → `text-decoration: line-through`, branco a 50% de
  opacidade (preço "riscado").
- `.pv-preco-por` → `'Cinzel Decorative'` (herdada de `--fonte-principal`),
  `3rem`, dourado (`--cor-primaria`) — é o número em maior destaque visual
  de toda a página. Em telas até `768px` cai para `2.2rem`, e até `480px`
  para `1.9rem`.
- `.pv-parcelamento` → branco a 70% de opacidade, menor.
- `.pv-botao` → fundo dourado sólido, texto escuro (`#0a0a0a`), padding
  generoso, `hover: opacity 0.85`. Em telas até `768px` o padding e a
  fonte diminuem levemente para caber melhor.

## Componentes envolvidos

- `src/components/PaginaVendas.jsx` — renderiza os campos de
  `curso.oferta` e o `<button className="pv-botao">`.

## Funcionalidades

**O botão de compra é "mock"**: hoje ele não tem `onClick` nem `href`
nenhum — só existe visualmente. Isso está documentado como próximo passo
em `docs/PAGINA-VENDAS.md` ("Integração real de checkout — ex: Hotmart,
Kiwify — no lugar do botão mock atual").

## Como manipular/editar

- **Trocar preços/textos**: editar `curso.oferta` em `curso.js`.
- **Conectar o botão a um checkout de verdade**: em `PaginaVendas.jsx`,
  adicionar `onClick` (ex: redirecionar pra link do Hotmart/Kiwify) ou
  trocar o `<button>` por um `<a href={curso.oferta.linkCheckout}>`,
  adicionando esse campo novo em `curso.js`.
- **Mudar a cor de destaque do preço**: `--cor-primaria` no topo do
  CSS — como é variável CSS, muda em toda a página de uma vez, não só
  aqui.