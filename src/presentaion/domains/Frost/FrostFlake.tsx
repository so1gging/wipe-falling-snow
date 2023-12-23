interface FrostFlakeProps {
  onMouseenter: () => void
}
export default function FrostFlake({ onMouseenter }: FrostFlakeProps) {
  return (
    <div
      style={{
        width: '10px',
        height: '10px',
        display: 'flex',
        padding: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
      }}
      onMouseEnter={onMouseenter}
    />
  )
}
