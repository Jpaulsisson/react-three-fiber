"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { Canvas } from '@react-three/fiber'
import Box from '@/components/box/Box'

export default function Home() {
  return (
    <main>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, -1, 1]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </main>
  )
}
