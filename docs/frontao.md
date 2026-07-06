# Frontão triangular (Frontao.jsx)

Componente novo: adiciona o frontão clássico (entablamento + tímpano
triangular) nos dois lados menores do templo — frente e fundo, onde
ficam as 3 colunas de cada lado curto da planta retangular.

## Composição

- **Entablamento**: faixa horizontal (`boxGeometry`), textura de mármore
  igual à das colunas, encaixada logo acima do topo delas
  (`Y_TOPO_COLUNAS = 4`, mesma altura onde termina o capitel em
  `Coluna.jsx`).
- **Tira dourada**: linha fina (`boxGeometry` achatado) na cor `#b8960c`,
  `metalness={0.9}` `roughness={0.2}` — mesmo material dos anéis
  (`torusGeometry`) usados em `Coluna.jsx`, pra manter consistência visual.
- **Tímpano**: triângulo desenhado com `THREE.Shape` e extrudado com
  `ExtrudeGeometry` (profundidade `ESPESSURA = 0.5`), textura de mármore
  igual ao restante do templo.

## Posicionamento

```jsx
<Frontao position={[0, 0, -7]} />
<Frontao position={[0, 0, 7]} />
```

Os valores `-7`/`7` são os mesmos usados como `metadeComprimento` em
`gerarPosicoesRetangulo` (`Scene.jsx`) — ou seja, os frontões ficam
exatamente alinhados com os lados menores da planta, sem precisar
recalcular nada manualmente se o templo mudar de tamanho no futuro
(bastaria repetir o valor de `metadeComprimento`).

## Dimensões internas do componente

- `LARGURA_BASE = 8.4` — levemente maior que a largura do templo (8
  unidades, de `metadeLargura = 4`), simulando o pequeno beiral que um
  frontão real tem sobre as colunas.
- `ALTURA_TIMPANO = 2.2` — altura do triângulo.
- `ALTURA_ENTABLAMENTO = 0.35` — espessura da faixa reta abaixo do
  triângulo.

## Outras mudanças relacionadas

- **Câmera inicial** (`App.jsx`): elevada de `[0, 5, 20]` para
  `[0, 6, 20]`, já que a altura total do templo aumentou (colunas +
  entablamento + tímpano ≈ 6,5 unidades, contra ~4 antes).

## Como ajustar no futuro

- **Frontão nos 4 lados**: adicionar mais duas instâncias de `Frontao`
  girando 90° (`rotation={[0, Math.PI / 2, 0]}`) e trocando
  `LARGURA_BASE` pelo valor equivalente ao comprimento do templo.
- **Tímpano mais/menos inclinado**: mexer em `ALTURA_TIMPANO`.
- **Coluna.jsx não foi alterado** — a altura de referência
  (`Y_TOPO_COLUNAS = 4`) foi calculada a partir da geometria existente,
  não exige nenhuma mudança nela.