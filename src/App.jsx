import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene.jsx'
import PaginaVendas from './components/PaginaVendas.jsx'
import { curso } from './data/curso.js'

export default function App() {
  const referenciaOferta = useRef(null)

  function rolarParaOferta() {
    referenciaOferta.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ width: '100%' }}>
      {/* HERO: a cena 3D do templo ocupa a primeira tela inteira */}
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        {/* Título sobreposto à cena 3D */}
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            left: 0,
            width: '100%',
            textAlign: 'center',
            zIndex: 10,
            pointerEvents: 'none',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: '#f5f0e8',
          }}
        >
          <h1 style={{ fontSize: '2rem', letterSpacing: '0.15em', margin: 0, fontWeight: 600 }}>
            {curso.hero.titulo}
          </h1>
          <p style={{ opacity: 0.6, fontSize: '1rem', marginTop: '0.5rem' }}>
            {curso.hero.subtitulo}
          </p>
        </div>

        <Canvas shadows camera={{ position: [0, 4, 15], fov: 50 }}>
          <Scene />
        </Canvas>

        {/* Botão que leva o visitante da cena 3D para a página de vendas */}
        <div className="pv-hero-cta">
          <button
            onClick={rolarParaOferta}
            style={{
              background: 'transparent',
              border: '1px solid #f5f0e8',
              color: '#f5f0e8',
              padding: '0.9rem 2rem',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.1rem',
              letterSpacing: '0.05em',
              cursor: 'pointer',
            }}
          >
            {curso.hero.cta}
          </button>
        </div>
      </div>

      {/* Página de vendas, abaixo da cena 3D */}
      <div ref={referenciaOferta}>
        <PaginaVendas />
      </div>
    </div>
  )
}
