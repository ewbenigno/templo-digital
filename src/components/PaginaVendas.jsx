import { curso } from '../data/curso.js'
import '../styles/paginaVendas.css'

// Esse componente não tem nenhum texto "hardcoded" — tudo vem de
// src/data/curso.js. Trocar de produto = trocar aquele arquivo.
export default function PaginaVendas() {
  return (
    <div>
      {/* Problema */}
      <section className="pv-secao pv-fundo-ivory">
        <h2 className="pv-titulo">{curso.problema.titulo}</h2>
        <p className="pv-texto">{curso.problema.texto}</p>
      </section>

      {/* Módulos */}
      <section className="pv-secao pv-fundo-black">
        <h2 className="pv-titulo">O método, em 4 pilares</h2>
        <div className="pv-grid-modulos">
          {curso.modulos.map((modulo) => (
            <div className="pv-card-modulo" key={modulo.titulo}>
              <h3>{modulo.titulo}</h3>
              <p>{modulo.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section className="pv-secao pv-fundo-ivory">
        <h2 className="pv-titulo">{curso.sobre.titulo}</h2>
        <p className="pv-texto">{curso.sobre.texto}</p>
      </section>

      {/* Oferta */}
      <section className="pv-secao pv-fundo-black pv-oferta">
        <h2 className="pv-titulo">{curso.oferta.titulo}</h2>
        <p className="pv-preco-de">{curso.oferta.precoDe}</p>
        <p className="pv-preco-por">{curso.oferta.precoPor}</p>
        <p className="pv-parcelamento">{curso.oferta.parcelamento}</p>
        <button className="pv-botao">{curso.oferta.textoBotao}</button>
      </section>

      {/* FAQ */}
      <section className="pv-secao pv-fundo-ivory">
        <h2 className="pv-titulo">Perguntas frequentes</h2>
        {curso.faq.map((item) => (
          <div className="pv-faq-item" key={item.pergunta}>
            <h4>{item.pergunta}</h4>
            <p>{item.resposta}</p>
          </div>
        ))}
      </section>

      {/* Rodapé */}
      <footer className="pv-rodape pv-fundo-black">
        <p>{curso.marca}</p>
        <div className="pv-rodape-links">
          {curso.redes.map((rede) => (
            <a href={rede.url} key={rede.nome}>
              {rede.nome}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}
