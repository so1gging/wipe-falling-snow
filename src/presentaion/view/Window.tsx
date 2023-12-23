import SnowCanvas from '@/presentaion/domains/SnowCanvas/SnowCanvas.tsx'

export default function Window() {
  return (
    <SnowCanvas width={500} height={500}>
      <SnowCanvas.Flake />
    </SnowCanvas>
  )
}
