import { OrbitControls, Stars } from '@react-three/drei'
import Coluna from './Coluna.jsx'
import Altar from './Altar.jsx'

// Gera as posições das colunas em círculo.
// Isso é só matemática de trigonometria (seno/cosseno) pra distribuir
// pontos igualmente ao redor de um círculo de raio "raio".
function gerarPosicoesColunas(quantidade, raio) {
  const posicoes = []
  for (let i = 0; i < quantidade; i++) {
    const angulo = (i / quantidade) * Math.PI * 2
    const x = Math.cos(angulo) * raio
    const z = Math.sin(angulo) * raio
    posicoes.push([x, 0, z])
  }
  return posicoes
}

export default function Scene() {
  const colunas = gerarPosicoesColunas(8, 5)

  return (
    <>
      {/* Névoa: dá profundidade e clima contemplativo */}
      <fog attach="fog" args={['#0d0d0d', 8, 22]} />

      {/* Luz ambiente suave + luz dourada vindo de cima */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 6, 0]} intensity={40} color="#f0c987" />
      <directionalLight position={[5, 8, 5]} intensity={0.5} color="#ffffff" />

      {/* Estrelas ao fundo, reforçam a atmosfera de templo sagrado */}
      <Stars radius={50} depth={30} count={2000} factor={2} fade speed={0.5} />

      {/* Chão do templo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial color="#46484d" roughness={0.8} />
      </mesh>

      {/* Colunas distribuídas em círculo */}
      {colunas.map((pos, i) => (
        <Coluna key={i} position={pos} />
      ))}

      {/* Altar central, clicável */}
      <Altar />

      {/* Câmera controlável pelo usuário + rotação automática lenta */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        minDistance={5}
        maxDistance={18}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}
