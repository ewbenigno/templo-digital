import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useMemo } from 'react'
import Coluna from './Coluna.jsx'
import Altar from './Altar.jsx'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

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

  const texturaChao = useMemo(
    () => gerarTexturaMarmore({ corBase: '#46484d', corVeio: '#2c2d30' }),
    []
  )

  return (
    <>
      {/* Névoa: dá profundidade e clima contemplativo */}
      <fog attach="fog" args={['#0d0d0d', 8, 24]} />

      {/* Luz ambiente suave + luz dourada vindo de cima (a "presença" no altar) */}
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 3, 0]} intensity={25} color="#f0c987" distance={8} decay={2} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.6}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Estrelas ao fundo, reforçam a atmosfera de templo sagrado */}
      <Stars radius={50} depth={30} count={2000} factor={2} fade speed={0.5} />

      {/* Chão do templo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial map={texturaChao} roughness={0.75} metalness={0.1} />
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
        minDistance={6}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.1}
      />

      {/* Pós-processamento: bloom pega qualquer ponto muito brilhante
          (a esferinha emissiva do altar) e espalha um brilho suave ao redor */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.15} darkness={0.6} />
      </EffectComposer>
    </>
  )
}
