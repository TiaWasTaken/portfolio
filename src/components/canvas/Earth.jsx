import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  
  const Earth = useGLTF('./planet/scene.gltf');

  return (
    <primitive object={Earth.scene} scale={2.5}/>
  )
}


const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDrawingBuffer: true }} camera={{ fov: 45, near: 0.1, far: 200, position:[-4, 3, 6] }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={1.4} enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={-Math.PI} />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
