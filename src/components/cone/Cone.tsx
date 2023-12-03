"use client";
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Cone(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.y += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <coneGeometry args={[1, 3, 4]} />
      <meshStandardMaterial color={hovered ? 'violet' : 'aquamarine'} />
    </mesh>
  )
}

export default Cone;