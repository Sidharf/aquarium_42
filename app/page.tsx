import dynamic from 'next/dynamic';

const TankScene = dynamic(() => import('@/components/TankScene').then((m) => m.TankScene), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F7F9FB',
        color: '#1F2933',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      Loading aquarium…
    </div>
  ),
});

export default function Home() {
  return <TankScene />;
}
