import { useMemo, useState } from 'react'
import { Text } from '@react-three/drei'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

const FRASES = [
  'A riqueza começa na disciplina, não na sorte.',
  'Guarda o que semeias antes de colher o que desejas.',
  'Quem domina seus gastos, domina seu destino.',
]

export default function Altar() {
  const [indice, setIndice] = useState(0)

  const textura = useMemo(
    () => gerarTexturaMarmore({ corBase: '#e2e2e4', corVeio: '#9c9298' }),
    []
  )

  return (
    <group position={[0, 0, 0]}>
      {/* Bloco do altar */}
      <mesh
        position={[0, 0.4, 0]}
        castShadow
        receiveShadow
        onClick={() => setIndice((i) => (i + 1) % FRASES.length)}
      >
        <boxGeometry args={[1.4, 0.8, 1.4]} />
        <meshStandardMaterial map={textura} roughness={0.35} metalness={0.15} />
      </mesh>

      {/* Pequena esfera emissiva flutuando acima do altar: é ela que o
          efeito de bloom vai "pegar" e transformar em brilho dourado */}
      <mesh position={[0, 1.15, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#f0c987"
          emissive="#f0c987"
          emissiveIntensity={4}
          toneMapped={false}
        />
      </mesh>

      {/* Frase flutuante acima do altar */}
      <Text
        position={[0, 1.7, 0]}
        fontSize={0.22}
        color="#f5f0e8"
        maxWidth={4}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
      >
        {FRASES[indice]}
      </Text>
    </group>
  )
}
