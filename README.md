# Templo Digital

Site 3D minimalista inspirado em estoicismo + finanças (tema fictício "Sábio Investidor"),
feito para o Hackathon de Sites 3D.

> Projeto fictício desenvolvido para fins de portfólio/hackathon. Marca, produtos
> e conteúdo sem intenção comercial real.

## Demo

Deploy: [templo-digital.vercel.app](https://templo-digital.vercel.app)

## Como rodar no seu computador

1. Instale o [Node.js](https://nodejs.org) (versão 18 ou superior), se ainda não tiver.
2. Abra este projeto no VS Code.
3. No terminal do VS Code, rode:

   ```bash
   npm install
   ```

   Isso baixa o React, o Three.js, o React Three Fiber e as demais bibliotecas usadas.

4. Depois, rode:

   ```bash
   npm run dev
   ```

5. Abra o link que aparecer no terminal (algo como `http://localhost:5173`).

Toda vez que você salvar um arquivo, a página atualiza sozinha.

### Outros scripts disponíveis

```bash
npm run build     # gera a versão de produção em /dist
npm run preview   # serve a build de produção localmente
npm run audit     # roda npm audit, verificando vulnerabilidades nas dependências
```

## Estrutura

- `src/App.jsx` — monta o Canvas 3D, o texto sobreposto (título) e o botão que rola até a página de vendas.
- `src/components/Scene.jsx` — a cena: colunas em círculo, luzes, chão, estrelas, câmera, efeitos de pós-processamento (Bloom/Vignette).
- `src/components/Coluna.jsx` — uma coluna reutilizável (base + corpo + capitel).
- `src/components/Altar.jsx` — o altar central; clique nele para trocar a frase exibida.
- `src/components/PaginaVendas.jsx` — seção de vendas abaixo da cena 3D (problema, módulos, oferta, FAQ, rodapé).
- `src/data/curso.js` — todo o conteúdo textual da página de vendas (títulos, preços, FAQ). Trocar de produto = trocar esse arquivo.
- `src/styles/paginaVendas.css` — estilos da página de vendas.
- `src/utils/gerarTexturaMarmore.js` — gera texturas de mármore proceduralmente via canvas 2D, sem depender de imagens externas.

## Segurança

O projeto aplica algumas práticas básicas de segurança:

- **`vercel.json`** define headers HTTP de segurança (`Content-Security-Policy`,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`),
  reduzindo riscos como clickjacking e carregamento de scripts de origens não autorizadas.
- Versões das dependências fixadas no `package.json` (sem `^`), evitando updates
  automáticos silenciosos de dependências que poderiam ser comprometidas.
- `.gitignore` cobre `node_modules/`, `dist/` e `.env`, evitando vazamento acidental
  de segredos ou artefatos de build no repositório.

## Tecnologias usadas

- React + Vite
- Three.js
- React Three Fiber (`@react-three/fiber`)
- drei (`@react-three/drei`) — helpers como OrbitControls, Text, Stars
- postprocessing (`@react-three/postprocessing`) — efeitos de Bloom e Vignette

## Autor

Desenvolvido por [ewbenigno](https://github.com/ewbenigno).