import { useState } from 'react'
import { Text } from '@react-three/drei'

const FRASES = [
  'A riqueza começa na disciplina, não na sorte.',
  'Guarda o que semeias antes de colher o que desejas.',
  'Quem domina seus gastos, domina seu destino.',
]

export default function Altar() {
  const [indice, setIndice] = useState(0)

  return (
    <group position={[0, 0, 0]}>
      {/* Bloco do altar */}
      <mesh
        position={[0, 0.4, 0]}
        onClick={() => setIndice((i) => (i + 1) % FRASES.length)}
      >
        <boxGeometry args={[1.4, 0.8, 1.4]} />
        <meshStandardMaterial color="#e2e2e4" roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Frase flutuante acima do altar */}
      <Text
        position={[0, 1.6, 0]}
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
