import * as THREE from 'three'

// Gera uma textura de mármore desenhando "veios" curvos num canvas 2D.
// Vantagem: não depende de nenhuma imagem externa, então funciona offline
// e cada coluna pode ter um padrão levemente diferente.
export function gerarTexturaMarmore({
  corBase = '#f5f0e8',
  corVeio = '#b8ada0',
  tamanho = 512,
} = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = tamanho
  canvas.height = tamanho
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = corBase
  ctx.fillRect(0, 0, tamanho, tamanho)

  ctx.strokeStyle = corVeio
  ctx.lineCap = 'round'

  for (let i = 0; i < 18; i++) {
    ctx.beginPath()
    ctx.globalAlpha = 0.12 + Math.random() * 0.25
    ctx.lineWidth = 0.5 + Math.random() * 2

    let x = Math.random() * tamanho
    let y = Math.random() * tamanho
    ctx.moveTo(x, y)

    const segmentos = 5 + Math.floor(Math.random() * 5)
    for (let s = 0; s < segmentos; s++) {
      x += (Math.random() - 0.5) * 140
      y += (Math.random() - 0.5) * 140
      const cx = x + (Math.random() - 0.5) * 70
      const cy = y + (Math.random() - 0.5) * 70
      ctx.quadraticCurveTo(cx, cy, x, y)
    }
    ctx.stroke()
  }

  ctx.globalAlpha = 1

  const textura = new THREE.CanvasTexture(canvas)
  textura.wrapS = THREE.RepeatWrapping
  textura.wrapT = THREE.RepeatWrapping
  textura.needsUpdate = true
  return textura
}
