'use client'

export default function Nebula() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      {/* Deep nebula layer */}
      <div
        className='absolute inset-0 animate-[float_20s_linear_infinite]'
        style={{
          background:
            'radial-gradient(circle at 30% 60%, #4b1fa6, transparent 70%)',
          opacity: 0.5,
        }}
      />

      {/* Outer glow nebula */}
      <div
        className='absolute inset-0 animate-[float_35s_linear_infinite_reverse]'
        style={{
          background:
            'radial-gradient(circle at 70% 40%, #1f5ca6, transparent 70%)',
          opacity: 0.4,
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-20 animate-[parallax_60s_linear_infinite]" />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-20px, -20px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes parallax {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  )
}
