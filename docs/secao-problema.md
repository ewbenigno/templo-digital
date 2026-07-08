# Seção: Problema

Primeira seção da página de vendas (logo abaixo do hero 3D). Fundo escuro,
texto centralizado, sem elementos interativos — só a "dor" que o
produto resolve.

## Textos

Fonte dos dados: `src/data/curso.js` → chave `curso.problema`

```js
problema: {
  titulo: 'A maioria não erra por falta de informação.',
  texto: 'Erra por falta de estrutura. Sabemos o que deveríamos fazer com o dinheiro, ...',
}
```

Ambos os campos (`titulo` e `texto`) são 100% controlados pelo `curso.js` —
nenhum texto fixo no JSX.

## Estilo

Classes usadas (definidas em `src/styles/paginaVendas.css`):

- `.pv-secao` → largura máxima `900px`, centralizada, padding `5rem 2rem`,
  fonte `'EB Garamond', Georgia, serif`.
- `.pv-fundo-ivory` → apesar do nome ("marfim"), atualmente usa a mesma
  variável de fundo escuro `--cor-fundo` (`#0a0a0a`) que
  `.pv-fundo-black`. Ou seja, hoje as duas classes são visualmente
  idênticas — o nome `ivory` é resquício de uma paleta clara que não foi
  implementada (ponto de atenção se quiser reativar contraste claro/escuro
  entre seções no futuro).
- `.pv-titulo` → `'Cinzel Decorative'`, `2.4rem`, dourado
  (`--cor-primaria: #b8960c`), centralizado.
- `.pv-texto` → `1.2rem`, branco a 85% de opacidade, centralizado,
  `max-width: 640px`.

Em telas até `768px`, `.pv-secao` reduz o padding e `.pv-titulo` cai para
`1.7rem` (ver breakpoints mobile no fim do CSS).

## Componentes envolvidos

- `src/components/PaginaVendas.jsx` — só renderiza `curso.problema.titulo`
  e `curso.problema.texto` dentro de `<section className="pv-secao
  pv-fundo-ivory">`. Não tem lógica própria.

## Funcionalidades

Nenhuma — é uma seção estática, sem estado, sem interação.

## Como manipular/editar

- **Trocar texto**: editar `curso.problema.titulo` / `curso.problema.texto`
  em `curso.js`. Não precisa tocar em `PaginaVendas.jsx`.
- **Trocar cor de fundo pra algo realmente diferente do restante**: editar
  `--cor-fundo` no CSS, ou criar uma variável nova (`--cor-fundo-clara`) e
  usá-la em `.pv-fundo-ivory` pra recuperar o contraste que o nome da
  classe sugere.