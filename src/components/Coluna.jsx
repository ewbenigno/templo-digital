import { useMemo } from 'react'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

export default function Coluna({ position }) {

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

      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
        <meshStandardMaterial map={texturaBase} roughness={0.55} metalness={0.05} />
      </mesh>

      <mesh position={[0, 0.34, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.42, 0.04, 16, 32]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 3.5, 32]} />
        <meshStandardMaterial map={texturaCorpo} roughness={0.45} metalness={0.05} />
      </mesh>

      <mesh position={[0, 3.62, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.42, 0.045, 16, 32]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh position={[0, 3.85, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.5, 0.3, 32]} />
        <meshStandardMaterial map={texturaBase} roughness={0.55} metalness={0.05} />
      </mesh>

      <mesh position={[0, 3.98, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.6, 0.035, 16, 32]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}
