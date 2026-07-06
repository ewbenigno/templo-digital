import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useMemo } from 'react'
import Coluna from './Coluna.jsx'
import Altar from './Altar.jsx'
import Frontao from './Frontao.jsx'
import Telhado from './Telhado.jsx'
import CampoAsteroides from './CampoAsteroides.jsx'
import Cometa from './Cometa.jsx'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

function gerarPosicoesRetangulo({ colunasComprimento, colunasLargura, metadeComprimento, metadeLargura }) {
  const posicoes = []

  const passoZ = (metadeComprimento * 2) / (colunasComprimento - 1)
  for (let i = 0; i < colunasComprimento; i++) {
    const z = -metadeComprimento + i * passoZ
    posicoes.push([-metadeLargura, 0, z])
    posicoes.push([metadeLargura, 0, z])
  }

  const passoX = (metadeLargura * 2) / (colunasLargura - 1)
  for (let i = 1; i < colunasLargura - 1; i++) {
    const x = -metadeLargura + i * passoX
    posicoes.push([x, 0, -metadeComprimento])
    posicoes.push([x, 0, metadeComprimento])
  }

  return posicoes
}

export default function Scene() {
  const colunas = gerarPosicoesRetangulo({
    colunasComprimento: 5,
    colunasLargura: 3,
    metadeComprimento: 7,
    metadeLargura: 4,
  })

  const texturaChao = useMemo(
    () => gerarTexturaMarmore({ corBase: '#46484d', corVeio: '#2c2d30' }),
    []
  )

  return (
    <>
      <fog attach="fog" args={['#0d0d0d', 10, 30]} />

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

      <Stars radius={50} depth={30} count={2000} factor={2} fade speed={0.5} />

      <CampoAsteroides />
      <Cometa raio={28} velocidade={0.32} altura={7} offset={0} cor="#bcd8ff" />
      <Cometa raio={34} velocidade={0.22} altura={-4} offset={2.5} cor="#f0c987" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 18]} />
        <meshStandardMaterial map={texturaChao} roughness={0.75} metalness={0.1} />
      </mesh>

      {colunas.map((pos, i) => (
        <Coluna key={i} position={pos} />
      ))}

      <Altar />

      <Frontao position={[0, 0, -7]} />
      <Frontao position={[0, 0, 7]} />
      <Telhado />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
        minDistance={8}
        maxDistance={26}
        maxPolarAngle={Math.PI / 2.1}
      />

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