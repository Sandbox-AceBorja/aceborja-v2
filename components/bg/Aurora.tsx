'use client'

export default function Aurora() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      <div className='absolute inset-0' />

      <div
        className='absolute inset-0 animate-aurora opacity-50'
        style={{
          background:
            'linear-gradient(120deg, rgba(0,255,200,.4), rgba(0,127,255,.4), rgba(255,0,200,.4))',
          filter: 'blur(140px)',
        }}
      />

      <style jsx>{`
        @keyframes aurora {
          0% {
            transform: translate(-20%, -20%) rotate(0deg);
          }
          50% {
            transform: translate(20%, 10%) rotate(180deg);
          }
          100% {
            transform: translate(-20%, -20%) rotate(360deg);
          }
        }
        .animate-aurora {
          animation: aurora 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
