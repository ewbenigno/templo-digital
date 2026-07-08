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
- `src/components/Scene.jsx` — a cena: colunas no perímetro de um retângulo (planta estilo Partenon), luzes, chão, estrelas, câmera, cinturão de asteroides, cometas e efeitos de pós-processamento (Bloom/Vignette).
- `src/components/Coluna.jsx` — uma coluna reutilizável (base + corpo + capitel).
- `src/components/Altar.jsx` — o altar central; clique nele para trocar a frase exibida.
- `src/components/Frontao.jsx` — entablamento e tímpano triangular, nos lados menores do templo (frente e fundo).
- `src/components/Telhado.jsx` — corpo do telhado que liga os dois frontões, com vigas laterais sobre as colunas.
- `src/components/CampoAsteroides.jsx` — cinturão de asteroides estático ao redor do templo, usado como cenário de fundo.
- `src/components/Cometa.jsx` — cometa com órbita elíptica e rastro de luz; instanciado mais de uma vez em `Scene.jsx` para variação.
- `src/components/PaginaVendas.jsx` — seção de vendas abaixo da cena 3D (problema, módulos, oferta, FAQ, rodapé).
- `src/data/curso.js` — todo o conteúdo textual da página de vendas (títulos, preços, FAQ). Trocar de produto = trocar esse arquivo.
- `src/styles/paginaVendas.css` — estilos da página de vendas.
- `src/utils/gerarTexturaMarmore.js` — gera texturas de mármore proceduralmente via canvas 2D, sem depender de imagens externas.

## Documentação técnica

A pasta `docs/` reúne notas mais detalhadas sobre partes específicas do
projeto, úteis para entender decisões de implementação:

- `docs/planta-templo.md` — como a planta retangular das colunas é gerada.
- `docs/frontao.md` — composição e posicionamento do frontão triangular.
- `docs/secao-hero.md` — seção hero (cena 3D + texto sobreposto).
- `docs/secao-problema.md` — seção "Problema".
- `docs/secao-modulos.md` — seção "Módulos".
- `docs/secao-sobre.md` — seção "Sobre".
- `docs/secao-oferta.md` — seção "Oferta"/checkout.
- `docs/secao-faq.md` — seção "Perguntas frequentes".

## Segurança

O projeto aplica algumas práticas básicas de segurança:

- **`vercel.json`** define headers HTTP de segurança (`Content-Security-Policy`,
  `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`),
  reduzindo riscos como clickjacking e carregamento de scripts de origens não autorizadas.
- Versões das dependências fixadas no `package.json` (sem `^`), evitando updates
  automáticos silenciosos de dependências que poderiam ser comprometidas.
- `.gitignore` cobre `node_modules/`, `dist/` e `.env`, evitando vazamento acidental
  de segredos ou artefatos de build no repositório.

## Responsividade

- `#root` usa `width: 100%` (não `100vw`) e `html`/`body` têm
  `overflow-x: hidden`, evitando a barra de rolagem horizontal causada pela
  diferença entre a largura da viewport e a largura da scrollbar.
- Grid de módulos (`.pv-grid-modulos`) e breakpoints em `768px`/`480px` no
  `paginaVendas.css` ajustam padding, tipografia e o número de colunas em
  telas menores.
- Título/subtítulo do hero (`App.jsx`) usam `clamp()` para escalar
  suavemente com a largura da tela.
- O `Canvas` do react-three-fiber usa `dpr={[1, 2]}`, limitando a
  renderização em dispositivos com tela de alta densidade (a maioria dos
  celulares atuais), o que melhora a performance sem alterar o visual.

## Tecnologias usadas

- React + Vite
- Three.js
- React Three Fiber (`@react-three/fiber`)
- drei (`@react-three/drei`) — helpers como OrbitControls, Text, Stars
- postprocessing (`@react-three/postprocessing`) — efeitos de Bloom e Vignette

## Agradecimentos

Testes de QA por [Nome Sobrenome](https://github.com/usuario).

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md).

## Autor

Desenvolvido por [ewbenigno](https://github.com/ewbenigno).