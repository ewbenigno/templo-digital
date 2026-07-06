import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Trail } from '@react-three/drei'

// Cometa que percorre uma órbita elíptica lenta ao redor do templo,
// deixando um rastro de luz atrás de si. Cada instância pode ter seu
// próprio raio/velocidade/altura/cor via props, pra criar variação
// colocando mais de um na cena.
export default function Cometa({
  raio = 30,
  velocidade = 0.12,
  altura = 6,
  offset = 0,
  cor = '#bcd8ff',
}) {
  const nucleoRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * velocidade + offset
    const x = Math.cos(t) * raio
    const z = Math.sin(t) * raio * 0.6
    const y = altura + Math.sin(t * 0.7) * 3

    if (nucleoRef.current) {
      nucleoRef.current.position.set(x, y, z)
    }
  })

  return (
    <Trail width={2.2} length={7} color={cor} attenuation={(t) => t * t}>
      <mesh ref={nucleoRef}>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshStandardMaterial
          color={cor}
          emissive={cor}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
    </Trail>
  )
}