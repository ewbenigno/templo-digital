import { useMemo } from 'react'

// Cinturão de asteroides estático, espalhado numa faixa ao redor do templo,
// bem além do alcance da câmera (minDistance/maxDistance do OrbitControls
// vão de 8 a 26), então funcionam como cenário de fundo sem atrapalhar a
// leitura do templo em primeiro plano.
const QUANTIDADE = 45
const RAIO_MIN = 22
const RAIO_MAX = 42
const VARIACAO_ALTURA = 18

function gerarAsteroides() {
  const lista = []
  for (let i = 0; i < QUANTIDADE; i++) {
    const raio = RAIO_MIN + Math.random() * (RAIO_MAX - RAIO_MIN)
    const angulo = Math.random() * Math.PI * 2

    lista.push({
      position: [
        Math.cos(angulo) * raio,
        (Math.random() - 0.5) * VARIACAO_ALTURA,
        Math.sin(angulo) * raio,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      escala: 0.15 + Math.random() * 0.5,
    })
  }
  return lista
}

export default function CampoAsteroides() {
  // Gerado uma única vez: são estáticos, não precisam recalcular a cada render.
  const asteroides = useMemo(() => gerarAsteroides(), [])

  return (
    <group>
      {asteroides.map((asteroide, i) => (
        <mesh
          key={i}
          position={asteroide.position}
          rotation={asteroide.rotation}
          scale={asteroide.escala}
        >
          {/* icosaedro sem suavização = silhueta irregular, tipo rocha */}
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#4a4640" roughness={1} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}