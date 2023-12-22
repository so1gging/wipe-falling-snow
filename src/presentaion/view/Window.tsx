import Snowly from '../components/Snowly/Snowly.tsx'

export default function Window() {
  return (
    <Snowly width={500} height={500}>
      <Snowly.Flake />
    </Snowly>
  )
}
