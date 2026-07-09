'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, Lightformer, ContactShadows, OrbitControls, Center } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, type ReactNode } from 'react'

const Composer = EffectComposer as unknown as React.FC<{ children?: ReactNode; multisampling?: number }>

function DJ() {
  const { scene } = useGLTF('/models/pioneer_dj_console.glb')
  return <primitive object={scene} scale={0.02} />
}

export default function ShowcaseScene() {
  return (
    <Canvas camera={{ position: [0, 0.6, 2.6], fov: 40 }} dpr={[1, 2]} gl={{ antialias: true }} style={{ height: '100vh' }}>
      {/* soft neutral studio gradient background */}
      <color attach="background" args={['#12141a']} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={2.2} />
      <directionalLight position={[-4, 3, -2]} intensity={1} color="#cfe0ff" />
      <spotLight position={[0, 6, 3]} angle={0.5} penumbra={1} intensity={3} />

      <Suspense fallback={null}>
        <Center position={[0, 0.2, 0]}>
          <DJ />
        </Center>
        {/* clean neutral studio environment (procedural, no network) */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} position={[0, 4, 4]} scale={[10, 5, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={2} position={[-6, 2, 1]} scale={[6, 6, 1]} color="#eef3ff" />
          <Lightformer form="rect" intensity={2} position={[6, 3, -1]} scale={[6, 6, 1]} color="#fff4e0" />
          <Lightformer form="ring" intensity={1.5} position={[0, 1, -5]} scale={[8, 8, 1]} color="#8fb2ff" />
        </Environment>
        <ContactShadows position={[0, -0.85, 0]} opacity={0.55} scale={8} blur={2.6} far={3} />
      </Suspense>

      <Composer multisampling={4}>
        <Bloom intensity={0.5} luminanceThreshold={0.75} luminanceSmoothing={0.3} mipmapBlur />
      </Composer>

      <OrbitControls autoRotate autoRotateSpeed={0.8} enablePan={false} minPolarAngle={0.6} maxPolarAngle={Math.PI / 2.05} />
    </Canvas>
  )
}

useGLTF.preload('/models/pioneer_dj_console.glb')
