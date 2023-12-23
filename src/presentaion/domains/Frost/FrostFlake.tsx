interface FrostFlakeProps {
  onMouseenter: () => void
}
export default function FrostFlake({ onMouseenter }: FrostFlakeProps) {
  return (
    <div
      style={{
        width: '22px',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={onMouseenter}
    />
  )
}
