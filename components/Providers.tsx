'use client'
import { Toaster } from 'react-hot-toast'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1A110A',
            color: '#F5EDD6',
            border: '1px solid #2E1F10',
          },
          success: { iconTheme: { primary: '#C8A96E', secondary: '#1A110A' } },
        }}
      />
    </>
  )
}
