"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { Canvas } from '@react-three/fiber'
import Box from '@/components/box/Box'
import Sphere from '@/components/sphere/Sphere';
import Extrude from '@/components/extrude/Extrude';

export default function Home() {
  return (
    <main>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, -1, 1]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <Canvas>
        <ambientLight />
        <directionalLight position={[100, 100, 10]} />
        <Sphere position={[1, 1, 1]} />
      </Canvas>
      <Canvas>
        <ambientLight />
        <directionalLight position={[100, 100, 10]} />
        <Extrude position={[1, 1, 1]} />
      </Canvas>
    </main>
  )
}
