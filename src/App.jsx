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
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div
          style={{
            position: 'absolute',
            top: '2rem',
            left: 0,
            width: '100%',
            textAlign: 'center',
            zIndex: 10,
            pointerEvents: 'none',
            fontFamily: "'Cinzel Decorative', serif",
            color: '#b8960c',
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

        <div className="pv-hero-cta">
          <button
            onClick={rolarParaOferta}
            style={{
              background: '#b8960c',
              border: '1px solid #0a0a0a',
              color: '#0a0a0a',
              padding: '0.9rem 2rem',
              fontFamily: "'EB Garamond', serif",
              fontSize: '1.1rem',
              letterSpacing: '0.05em',
              cursor: 'pointer',
            }}
          >
            {curso.hero.cta}
          </button>
        </div>
      </div>

      <div ref={referenciaOferta}>
        <PaginaVendas />
      </div>
    </div>
  )
}
