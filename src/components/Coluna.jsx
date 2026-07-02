import { useMemo } from 'react'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

// Uma coluna simples feita de formas geométricas básicas, agora com
// textura de mármore procedural aplicada ao material.
// position: [x, y, z] -> onde a coluna fica na cena
export default function Coluna({ position }) {
  // useMemo garante que a textura só é gerada uma vez por coluna,
  // não a cada re-renderização do componente.
  const texturaCorpo = useMemo(
    () => gerarTexturaMarmore({ corBase: '#f5f0e8', corVeio: '#c9beb0' }),
    []
  )
  const texturaBase = useMemo(
    () => gerarTexturaMarmore({ corBase: '#d6cfc7', corVeio: '#a89d8f' }),
    []
  )

  return (
    <group position={position}>
      {/* Base da coluna */}
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
        <meshStandardMaterial map={texturaBase} roughness={0.55} metalness={0.05} />
      </mesh>

      {/* Anel dourado logo acima da base: primeiro adorno */}
      <mesh position={[0, 0.34, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.42, 0.04, 16, 32]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Corpo da coluna */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 3.5, 32]} />
        <meshStandardMaterial map={texturaCorpo} roughness={0.45} metalness={0.05} />
      </mesh>

      {/* Anel dourado sob o capitel: segundo adorno */}
      <mesh position={[0, 3.62, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.42, 0.045, 16, 32]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Capitel (topo da coluna) */}
      <mesh position={[0, 3.85, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.5, 0.3, 32]} />
        <meshStandardMaterial map={texturaBase} roughness={0.55} metalness={0.05} />
      </mesh>

      {/* Friso dourado na borda do capitel: terceiro adorno,
          fecha o topo da coluna com um contorno brilhante */}
      <mesh position={[0, 3.98, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.6, 0.035, 16, 32]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}
