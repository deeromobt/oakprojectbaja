'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Clone, Environment, Lightformer, ContactShadows, OrbitControls, Float } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Suspense, useMemo, useRef, type ReactNode } from 'react'
import * as THREE from 'three'

// postprocessing's EffectComposer children typing conflicts with React 19 types
const Composer = EffectComposer as unknown as React.FC<{ children?: ReactNode; multisampling?: number }>

/* ---------- Truss rig (two towers + top beam) ---------- */
function TrussRig() {
  const { scene } = useGLTF('/models/truss.glb')
  const towers: [number, number, number][] = [
    [-3.4, 1, -0.6], [-3.4, 3, -0.6],
    [3.4, 1, -0.6], [3.4, 3, -0.6],
  ]
  return (
    <group>
      {towers.map((p, i) => (
        <Clone key={i} object={scene} position={p} />
      ))}
      {/* top beam — truss laid horizontal, stretched */}
      <Clone object={scene} position={[0, 4, -0.6]} rotation={[0, 0, Math.PI / 2]} scale={[1, 3.6, 1]} />
    </group>
  )
}

/* ---------- Volumetric-ish light beam ---------- */
function Beam({ x, color, delay }: { x: number; color: string; delay: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime
      ref.current.rotation.z = Math.sin(t * 0.5 + delay) * 0.28
    }
  })
  return (
    <group ref={ref} position={[x, 3.7, -0.4]}>
      <spotLight position={[0, 0, 0]} angle={0.32} penumbra={1} intensity={22} distance={12} color={color} target-position={[x, 0, 0]} />
      <mesh position={[0, -2, 0]}>
        <coneGeometry args={[1.15, 4, 32, 1, true]} />
        <meshBasicMaterial color={color} transparent opacity={0.09} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      {/* glowing emitter */}
      <mesh>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}

/* ---------- Floating particles ---------- */
function Particles({ count = 420 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = Math.random() * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1
    }
    return arr
  }, [count])
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c9b889" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  )
}

/* ---------- Reflective floor ---------- */
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#0a0c10" metalness={0.85} roughness={0.35} />
    </mesh>
  )
}

/* ---------- The stage ---------- */
function Stage() {
  const dj = useGLTF('/models/pioneer_dj_console.glb')
  const spk = useGLTF('/models/monitor_speaker.glb')
  return (
    <group>
      <TrussRig />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <primitive object={dj.scene} scale={0.02} position={[0, 0.62, 0]} rotation={[0, 0, 0]} />
      </Float>
      <Clone object={spk.scene} position={[-2.4, 0, 0.6]} rotation={[0, 0.5, 0]} scale={1.1} />
      <Clone object={spk.scene} position={[2.4, 0, 0.6]} rotation={[0, -0.5, 0]} scale={1.1} />

      <Beam x={-2.4} color="#5b8cff" delay={0} />
      <Beam x={-0.8} color="#ff4d7d" delay={1.4} />
      <Beam x={0.8} color="#c9b889" delay={2.1} />
      <Beam x={2.4} color="#7b5bff" delay={3.2} />

      <Particles />
      <Floor />
      <ContactShadows position={[0, 0.01, 0]} opacity={0.6} scale={16} blur={2.8} far={5} />
    </group>
  )
}

export default function StageScene() {
  return (
    <Canvas camera={{ position: [0, 2.2, 8], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true }} style={{ height: '100vh' }}>
      <color attach="background" args={['#05060a']} />
      <fog attach="fog" args={['#05060a', 9, 22]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[-6, 6, -4]} intensity={0.5} color="#5b8cff" />

      <Suspense fallback={null}>
        <Stage />
        <Environment resolution={128}>
          <Lightformer form="rect" intensity={2.5} position={[0, 5, 3]} scale={[10, 3, 1]} color="#a9c4ff" />
          <Lightformer form="rect" intensity={2} position={[-6, 2, -2]} scale={[5, 6, 1]} color="#c9b889" />
          <Lightformer form="rect" intensity={3} position={[6, 3, 2]} scale={[4, 4, 1]} color="#ff4d7d" />
        </Environment>
      </Suspense>

      <Composer multisampling={0}>
        <Bloom intensity={1.1} luminanceThreshold={0.6} luminanceSmoothing={0.35} mipmapBlur radius={0.7} />
        <Vignette offset={0.22} darkness={0.72} eskil={false} />
      </Composer>

      <OrbitControls autoRotate autoRotateSpeed={0.5} enablePan={false} minPolarAngle={0.4} maxPolarAngle={Math.PI / 2.1} target={[0, 1.5, 0]} />
    </Canvas>
  )
}

useGLTF.preload('/models/truss.glb')
useGLTF.preload('/models/pioneer_dj_console.glb')
useGLTF.preload('/models/monitor_speaker.glb')
