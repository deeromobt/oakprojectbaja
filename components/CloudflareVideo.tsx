interface Props {
  id: string
  mode: 'background' | 'loop' | 'player' | 'cover'
  portrait?: boolean
  className?: string
  style?: React.CSSProperties
}

const BASE = 'https://iframe.videodelivery.net'

export default function CloudflareVideo({ id, mode, portrait = false, className = '', style }: Props) {
  if (mode === 'background') {
    // Wrapper with inset:0 gives the iframe a proper containing block with explicit
    // height, so minHeight:'100%' on the iframe correctly covers the full section
    // regardless of how tall the section is (even on mobile where it stacks tall).
    return (
      <div
        className={className}
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', ...style }}
      >
        <iframe
          src={`${BASE}/${id}?autoplay=true&muted=true&loop=true&controls=false&background=true`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',    /* 16:9 landscape */
            minHeight: '100%',    /* fills wrapper height */
            minWidth: '177.78vh', /* 16:9 inverted */
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
          }}
          allow="autoplay; fullscreen"
        />
      </div>
    )
  }

  if (mode === 'cover') {
    // Fills a sized, position:relative parent — the iframe keeps the video's
    // native aspect ratio and is scaled to COVER (crops overflow, no letterbox).
    return (
      <iframe
        src={`${BASE}/${id}?autoplay=true&muted=true&loop=true&controls=false&background=true`}
        title="Wedding film"
        allow="autoplay; fullscreen"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
        style={{
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          aspectRatio: portrait ? '9 / 16' : '16 / 9',
          border: 'none',
          pointerEvents: 'none',
          ...style,
        }}
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
