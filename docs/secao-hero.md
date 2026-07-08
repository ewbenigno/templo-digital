# Seção: Hero (cena 3D)

Primeira tela do site (100vh). É a cena 3D do templo grego, com o
título/subtítulo/CTA sobrepostos por cima via HTML absoluto, **não faz
parte de `PaginaVendas.jsx`**, vive direto em `App.jsx`.

## Textos

Fonte dos dados: `src/data/curso.js` → chave `curso.hero`

```js
hero: {
  titulo: 'TEMPLO DIGITAL',
  subtitulo: 'clique no altar para revelar sabedoria',
  cta: 'Conhecer o método',
}
```

- `titulo` → `<h1>` no topo da tela.
- `subtitulo` → `<p>` logo abaixo do título.
- `cta` → texto do botão no rodapé da tela (leva até a página de vendas).

## Estilo

Diferente das outras seções, o hero **não usa as classes `pv-*` do
CSS**. Os estilos estão inline, direto no JSX de `App.jsx` (linhas ~30–75).

- Título (`h1`): fonte `'Cinzel Decorative', serif`, `clamp(1.4rem, 5vw,
  2rem)` (escala com a largura da tela), cor dourada `#b8960c`,
  `letter-spacing: 0.15em`.
- Subtítulo (`p`): fonte `'EB Garamond', serif`, `clamp(0.85rem, 3vw,
  1rem)`, branco a 60% de opacidade.
- Bloco de texto todo com `pointer-events: none` (pra não atrapalhar o
  drag do mouse na cena 3D atrás dele).
- Botão CTA: fundo transparente, borda dourada `1px solid #b8960c`, texto
  dourado, fonte `'EB Garamond'`. Fica posicionado via classe
  `.pv-hero-cta` (essa sim vem do `paginaVendas.css`) — `position: absolute;
  bottom: 3rem`, centralizado.

## Componentes envolvidos

- `App.jsx` — monta o layout do hero e o `<Canvas>` do react-three-fiber.
- `src/components/Scene.jsx` — cena 3D inteira (luzes, névoa, chão,
  colunas, altar, bloom).
- `src/components/Coluna.jsx` — colunas do templo, posicionadas no perímetro de um retângulo (ver `docs/planta-templo.md`).
- `src/components/Altar.jsx` — elemento central clicável, com citações.
- `src/components/Frontao.jsx` — entablamento e tímpano triangular, nos
  lados menores do templo (frente e fundo).
- `src/components/Telhado.jsx` — corpo do telhado que liga os dois
  frontões.
- `src/components/CampoAsteroides.jsx` — cinturão de asteroides usado como
  cenário de fundo.
- `src/components/Cometa.jsx` — cometas com órbita elíptica e rastro de
  luz, ao redor do templo.
- `src/utils/gerarTexturaMarmore.js` — textura procedural de mármore usada
  nas colunas e no altar.

## Funcionalidades

- **Scroll suave até a oferta**: o botão CTA chama `rolarParaOferta()`,
  que usa `referenciaOferta.current.scrollIntoView({ behavior: 'smooth'
  })`. O `ref` está no `<div>` que envolve `<PaginaVendas />`.
- **Cena interativa**: `OrbitControls autoRotate` permite arrastar pra
  girar a câmera, e ela gira sozinha devagar quando ninguém mexe.
- **Altar clicável**: cada clique no altar avança pra próxima frase de um
  array de citações (lógica dentro de `Altar.jsx`, não em `curso.js`).

## Como manipular/editar

- **Trocar textos**: editar `curso.hero` em `curso.js`.
- **Trocar cores/fontes do título e subtítulo**: como estão inline em
  `App.jsx`, é preciso editar diretamente lá (não em CSS). Se quiser
  centralizar isso nas classes `pv-*` no futuro, seria um refactor.
- **Mudar tamanho/escala do templo 3D**: em `Scene.jsx`, mexer na função
  `gerarPosicoesRetangulo({ colunasComprimento, colunasLargura,
  metadeComprimento, metadeLargura })` — ver detalhes em
  `docs/planta-templo.md`.
- **Ajustar responsividade do título/subtítulo**: como usam `clamp()`
  inline em `App.jsx`, basta mudar os valores mínimo/máximo do `clamp`
  (ex: `clamp(1.4rem, 5vw, 2rem)`) para outro intervalo de tamanho.
- **Adicionar/remover frontão**: componente separado, `Frontao.jsx` — ver
  `docs/frontao.md`.
- **Trocar as frases do altar**: dentro de `Altar.jsx`, no array de
  citações.