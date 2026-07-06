import { useMemo } from 'react'
import * as THREE from 'three'
import { gerarTexturaMarmore } from '../utils/gerarTexturaMarmore.js'

// Mesmas medidas usadas em Frontao.jsx, para o telhado encaixar exatamente
// entre os dois frontões (que ficam em z = -7 e z = +7).
const LARGURA_BASE = 8.4
const ALTURA_TIMPANO = 2.2
const ESPESSURA_VIGA = 0.5
const ALTURA_ENTABLAMENTO = 0.35
const Y_TOPO_COLUNAS = 4
const COMPRIMENTO_TELHADO = 15.2 // cobre os frontões (14) com um pequeno beiral

export default function Telhado() {
  const texturaTelhado = useMemo(
    () => gerarTexturaMarmore({ corBase: '#e2ded6', corVeio: '#a89d8f' }),
    []
  )
  const texturaViga = useMemo(
    () => gerarTexturaMarmore({ corBase: '#f5f0e8', corVeio: '#c9beb0' }),
    []
  )

  // O corpo do telhado é o mesmo triângulo do tímpano do Frontao,
  // só que estendido (extrudado) ao longo de todo o comprimento do
  // templo em vez de uma fatia fina — assim os dois frontões passam
  // a ser as "tampas" das duas pontas de um único volume contínuo.
  const geometriaTelhado = useMemo(() => {
    const metade = LARGURA_BASE / 2
    const forma = new THREE.Shape()
    forma.moveTo(-metade, 0)
    forma.lineTo(metade, 0)
    forma.lineTo(0, ALTURA_TIMPANO)
    forma.lineTo(-metade, 0)

    return new THREE.ExtrudeGeometry(forma, {
      depth: COMPRIMENTO_TELHADO,
      bevelEnabled: false,
    })
  }, [])

  const yEntablamento = Y_TOPO_COLUNAS + ALTURA_ENTABLAMENTO / 2
  const yTopoEntablamento = Y_TOPO_COLUNAS + ALTURA_ENTABLAMENTO

  return (
    <group>
      {/* Corpo do telhado, ligando os dois frontões */}
      <mesh
        position={[0, yTopoEntablamento, -COMPRIMENTO_TELHADO / 2]}
        geometry={geometriaTelhado}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial map={texturaTelhado} roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Friso dourado correndo pela cumeeira (linha mais alta do telhado) */}
      <mesh position={[0, yTopoEntablamento + ALTURA_TIMPANO, 0]} castShadow>
        <boxGeometry args={[0.08, 0.08, COMPRIMENTO_TELHADO]} />
        <meshStandardMaterial color="#b8960c" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Vigas do entablamento nas duas laterais longas, apoiando o
          telhado sobre as colunas que hoje ficam sem cobertura entre
          um frontão e outro. */}
      <mesh position={[LARGURA_BASE / 2, yEntablamento, 0]} castShadow receiveShadow>
        <boxGeometry args={[ESPESSURA_VIGA, ALTURA_ENTABLAMENTO, COMPRIMENTO_TELHADO - 0.4]} />
        <meshStandardMaterial map={texturaViga} roughness={0.5} metalness={0.05} />
      </mesh>
      <mesh position={[-LARGURA_BASE / 2, yEntablamento, 0]} castShadow receiveShadow>
        <boxGeometry args={[ESPESSURA_VIGA, ALTURA_ENTABLAMENTO, COMPRIMENTO_TELHADO - 0.4]} />
        <meshStandardMaterial map={texturaViga} roughness={0.5} metalness={0.05} />
      </mesh>
    </group>
  )
}