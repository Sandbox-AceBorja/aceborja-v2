'use client'

import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const generatePointsInSphere = (count: number, radius: number) => {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random())
    const theta = Math.random() * 2 * Math.PI
    const phi = Math.acos(2 * Math.random() - 1)
    positions.set(
      [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ],
      i * 3
    )
  }
  return positions
}

const StarField: React.FC = () => {
  const ref = useRef<THREE.Points>(null)

  const [points] = useState(() => generatePointsInSphere(600, 1.2))

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 8
      ref.current.rotation.y -= delta / 12
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas: React.FC = () => {
  return (
    <div className='fixed inset-0 w-full h-full -z-10'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarsCanvas
