import React, { useRef, useEffect } from 'react'

const Canvas = props => {

  const canvasRef = useRef(null)

  const draw = (ctx, frameCount) => {
    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // Outer circle
    ctx.fillStyle = '#FFD700'
    ctx.fill()

  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId

    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas ref={ canvasRef } { ...props }/>
}

export default Canvas