# Seção: Sobre

Terceira seção da página de vendas. Estrutura idêntica à seção
"Problema" — título + parágrafo centralizado — mas com o texto de
posicionamento/institucional do método.

## Textos

Fonte dos dados: `src/data/curso.js` → chave `curso.sobre`

```js
sobre: {
  titulo: 'Sobre o método',
  texto: 'O Sábio Investidor nasceu da ideia de que finanças pessoais têm mais a ver com ...',
}
```

Assim como em "Problema", os dois campos são 100% controlados pelo
`curso.js`.

## Estilo

Mesmas classes da seção Problema (`src/styles/paginaVendas.css`):

- `.pv-secao.pv-fundo-ivory` (ver nota sobre a cor no doc da seção
  Problema — hoje visualmente igual ao `pv-fundo-black`).
- `.pv-titulo` — `'Cinzel Decorative'`, dourado, centralizado.
- `.pv-texto` — `'EB Garamond'`, branco 85% opacidade, `max-width: 640px`,
  centralizado.

Também recebe os mesmos breakpoints mobile de `.pv-secao`/`.pv-titulo`
(768px e 480px), já que reaproveita as classes globais.

## Componentes envolvidos

- `src/components/PaginaVendas.jsx` — renderiza `curso.sobre.titulo` e
  `curso.sobre.texto` dentro de `<section className="pv-secao
  pv-fundo-ivory">`. Sem lógica própria, sem estado.

## Funcionalidades

Nenhuma — seção estática.

## Como manipular/editar

- **Trocar texto institucional**: editar `curso.sobre.titulo` /
  `curso.sobre.texto` em `curso.js`.
- Como reaproveita o mesmo padrão visual de "Problema", qualquer ajuste de
  estilo feito em `.pv-titulo` ou `.pv-texto` afeta as duas seções ao
  mesmo tempo (elas compartilham as mesmas classes).