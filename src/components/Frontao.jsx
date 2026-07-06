import { useMemo } from 'react'
import * as THREE from 'three'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

const LARGURA_BASE = 8.4
const ALTURA_TIMPANO = 2.2
const ESPESSURA = 0.5
const ALTURA_ENTABLAMENTO = 0.35
const Y_TOPO_COLUNAS = 4

export default function Frontao({ position }) {
  const textura = useMemo(
    () => gerarTexturaMarmore({ corBase: '#f5f0e8', corVeio: '#c9beb0' }),
    []
  )

  const geometriaTimpano = useMemo(() => {
    const metade = LARGURA_BASE / 2
    const forma = new THREE.Shape()
    forma.moveTo(-metade, 0)
    forma.lineTo(metade, 0)
    forma.lineTo(0, ALTURA_TIMPANO)
    forma.lineTo(-metade, 0)

    return new THREE.ExtrudeGeometry(forma, { depth: ESPESSURA, bevelEnabled: false })
  }, [])

  return (
    <group position={position}>
      <mesh
        position={[0, Y_TOPO_COLUNAS + ALTURA_ENTABLAMENTO / 2, -ESPESSURA / 2]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[LARGURA_BASE, ALTURA_ENTABLAMENTO, ESPESSURA]} />
        <meshStandardMaterial map={textura} roughness={0.5} metalness={0.05} />
      </mesh>

      <mesh
        position={[0, Y_TOPO_COLUNAS + ALTURA_ENTABLAMENTO, 0]}
        castShadow
      >
        <boxGeometry args={[LARGURA_BASE, 0.05, ESPESSURA + 0.05]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>

      <mesh
        position={[0, Y_TOPO_COLUNAS + ALTURA_ENTABLAMENTO, -ESPESSURA / 2]}
        geometry={geometriaTimpano}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial map={textura} roughness={0.45} metalness={0.05} />
      </mesh>
    </group>
  )
}