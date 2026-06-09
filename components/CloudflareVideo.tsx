interface Props {
  id: string
  mode: 'background' | 'loop' | 'player'
  portrait?: boolean
  className?: string
  style?: React.CSSProperties
}

const BASE = 'https://iframe.videodelivery.net'

export default function CloudflareVideo({ id, mode, portrait = false, className = '', style }: Props) {
  if (mode === 'background') {
    return (
      <iframe
        src={`${BASE}/${id}?autoplay=true&muted=true&loop=true&controls=false&background=true`}
        className={className}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '56.25vw',   /* 16:9 */
          minHeight: '100%',
          minWidth: '177.78vh', /* 16:9 inverted */
          transform: 'translate(-50%, -50%)',
          border: 'none',
          pointerEvents: 'none',
          ...style,
        }}
        allow="autoplay; fullscreen"
      />
    )
  }

  const aspectClass = portrait ? 'aspect-[9/16]' : 'aspect-video'

  if (mode === 'loop') {
    return (
      <iframe
        src={`${BASE}/${id}?autoplay=true&muted=true&loop=true&controls=false`}
        className={`w-full ${aspectClass} ${className}`}
        style={{ border: 'none', display: 'block', ...style }}
        allow="autoplay; fullscreen"
      />
    )
  }

  return (
    <iframe
      src={`${BASE}/${id}?controls=true`}
      className={`w-full ${aspectClass} ${className}`}
      style={{ border: 'none', display: 'block', ...style }}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  )
}
