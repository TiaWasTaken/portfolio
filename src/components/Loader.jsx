import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {

  const { progress } = useProgress();

  return (
    <Html>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span className="canvas-load"></span>
        <p style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40, textAlign: 'center' }}>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  )
}

export default Loader;

