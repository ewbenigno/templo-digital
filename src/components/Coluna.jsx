// Uma coluna simples feita de formas geométricas básicas.
// position: [x, y, z] -> onde a coluna fica na cena
export default function Coluna({ position }) {
  return (
    <group position={position}>
      {/* Base da coluna */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.3, 32]} />
        <meshStandardMaterial color="#d6cfc7" roughness={0.6} />
      </mesh>

      {/* Corpo da coluna */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 3.5, 32]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.5} />
      </mesh>

      {/* Capitel (topo da coluna) */}
      <mesh position={[0, 3.85, 0]}>
        <cylinderGeometry args={[0.6, 0.5, 0.3, 32]} />
        <meshStandardMaterial color="#d6cfc7" roughness={0.6} />
      </mesh>
    </group>
  )
}
