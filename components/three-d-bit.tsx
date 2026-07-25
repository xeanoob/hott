"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Environment, ContactShadows, PresentationControls, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

export function ThreeDBit() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Subtle rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <>
      <color attach="background" args={["#000000"]} />
      
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          {/* Main Bit Body (Abstract representation) */}
          <mesh ref={meshRef} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            {/* Using a TorusKnot for a very premium, complex metallic look, resembling folded steel or an advanced heating element */}
            <torusKnotGeometry args={[1.5, 0.4, 256, 64, 2, 3]} />
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.5}
              chromaticAberration={0.05}
              anisotropy={0.1}
              distortion={0.1}
              distortionScale={0.3}
              temporalDistortion={0.1}
              clearcoat={1}
              clearcoatRoughness={0.1}
              roughness={0.2}
              metalness={0.8}
              color="#ff6b00" // Warm, glowing "heated" color
            />
          </mesh>
          
          {/* Floating rings/accents */}
          <mesh position={[-2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial color="#c5a880" metalness={1} roughness={0.1} />
          </mesh>
          
          <mesh position={[2, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial color="#c5a880" metalness={1} roughness={0.1} />
          </mesh>
        </Float>
      </PresentationControls>

      {/* Realistic ground shadow */}
      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />

      {/* HDRI Environment for realistic metallic reflections */}
      <Environment preset="city" />
    </>
  )
}
