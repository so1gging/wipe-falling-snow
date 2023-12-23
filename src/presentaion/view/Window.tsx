import SnowCanvas from '../components/SnowCanvas/SnowCanvas.tsx'

export default function Window() {
  return (
    <SnowCanvas width={500} height={500}>
      <SnowCanvas.Flake />
    </SnowCanvas>
  )
}
