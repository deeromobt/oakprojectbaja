'use client'

import dynamic from 'next/dynamic'

const ModelScene = dynamic(() => import('@/components/experience/StageScene'), { ssr: false })

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', background: '#05070a' }}>
      <ModelScene />
    </div>
  )
}
