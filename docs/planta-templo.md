# Planta do templo (retangular, estilo Partenon)

A distribuição das colunas em `Scene.jsx` deixou de ser circular e passou a
formar o perímetro de um retângulo, aproximando a cena de uma planta de
templo grego clássico (peristilo).

## Antes x depois

- **Antes**: `gerarPosicoesColunas(quantidade, raio)` — 8 colunas
  distribuídas em círculo via `Math.cos`/`Math.sin`, raio 5.
- **Agora**: `gerarPosicoesRetangulo({ colunasComprimento, colunasLargura,
  metadeComprimento, metadeLargura })` — 12 colunas no perímetro de um
  retângulo.

## Parâmetros usados

```js
gerarPosicoesRetangulo({
  colunasComprimento: 5,  // colunas em cada lado maior (eixo Z), incluindo os cantos
  colunasLargura: 3,      // colunas em cada lado menor (eixo X), incluindo os cantos
  metadeComprimento: 7,   // metade do comprimento total (14 unidades)
  metadeLargura: 4,       // metade da largura total (8 unidades)
})
```

Isso gera **12 colunas únicas**:
- 5 colunas por lado maior × 2 lados = 10 posições (já incluem os 4 cantos)
- 1 coluna no meio de cada lado menor × 2 lados = 2 posições adicionais

Os cantos não são duplicados: o loop dos lados menores começa em `i = 1` e
para em `colunasLargura - 2`, pulando os pontos que já foram criados pelo
loop dos lados maiores.

## Outras mudanças relacionadas

- **Chão**: trocado de `circleGeometry` (raio 8) para `planeGeometry`
  (`12 × 18`), acompanhando a proporção retangular do templo.
- **Altar**: continua em `[0, 0, 0]` — coincide com o centro do retângulo,
  não precisou mover.
- **Câmera inicial** (`App.jsx`): reposicionada de `[0, 4, 15]` para
  `[0, 5, 20]` para a nova planta retangular, já que o layout é mais
  comprido (14 unidades no eixo Z) que o diâmetro do círculo anterior
  (10 unidades). Depois elevada novamente para `[0, 6, 20]` na altura Y,
  para enquadrar o frontão — ver `docs/frontao.md`.
- **OrbitControls**: `minDistance`/`maxDistance` ajustados de `6/20` para
  `8/26`, permitindo afastar a câmera o suficiente para enquadrar o
  templo inteiro.
- **Fog**: intervalo ajustado de `8–24` para `10–30`, evitando que as
  colunas das pontas do retângulo fiquem encobertas demais pela névoa.
- **Frontão**: o templo ganhou depois um frontão triangular nos lados
  menores (frente e fundo), documentado separadamente em
  `docs/frontao.md`.

## Como ajustar no futuro

- **Templo mais largo/estreito**: mexer em `metadeLargura`.
- **Templo mais comprido/curto**: mexer em `metadeComprimento`.
- **Mais colunas por lado**: aumentar `colunasComprimento` (lados maiores)
  ou `colunasLargura` (lados menores) — o cálculo de espaçamento
  (`passoZ`/`passoX`) se ajusta automaticamente, sem precisar
  reposicionar nada manualmente.
- **Coluna.jsx não foi alterado** — a aparência de cada coluna
  (geometria, material, textura) continua a mesma; só a posição de cada
  instância mudou.