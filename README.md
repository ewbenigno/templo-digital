# Templo Digital

Site 3D minimalista inspirado em estoicismo + finanças (tema Sábio Investidor),
feito para o Hackathon de Sites 3D.

## Como rodar no seu computador

1. Instale o [Node.js](https://nodejs.org) (versão 18 ou superior), se ainda não tiver.
2. Abra este projeto no VS Code.
3. No terminal do VS Code, rode:

   ```
   npm install
   ```

   Isso baixa o React, o Three.js e o React Three Fiber (as bibliotecas usadas).

4. Depois, rode:

   ```
   npm run dev
   ```

5. Abra o link que aparecer no terminal (algo como `http://localhost:5173`).

Toda vez que você salvar um arquivo, a página atualiza sozinha.

## Estrutura

- `src/App.jsx` — monta o Canvas 3D e o texto sobreposto (título).
- `src/components/Scene.jsx` — a cena: colunas em círculo, luzes, chão, estrelas, câmera.
- `src/components/Coluna.jsx` — uma coluna reutilizável (base + corpo + capitel).
- `src/components/Altar.jsx` — o altar central; clique nele para trocar a frase exibida.

## Próximos passos sugeridos

- Trocar a fonte do texto (Text do drei aceita fonte customizada via prop `font`,
  pode usar a Cormorant Garamond do seu projeto Sábio Investidor).
- Adicionar `@react-three/postprocessing` para um efeito de brilho (bloom) na luz dourada.
- Adicionar som ambiente (opcional, mas ajuda na imersão do vídeo demo).
- Testar em celular — o OrbitControls funciona com toque, mas vale revisar o desempenho.
- Gravar o vídeo demo mostrando: entrada na cena, rotação da câmera, clique no altar.

## Tecnologias usadas

- React + Vite
- Three.js
- React Three Fiber (`@react-three/fiber`)
- drei (`@react-three/drei`) — helpers como OrbitControls, Text, Stars
