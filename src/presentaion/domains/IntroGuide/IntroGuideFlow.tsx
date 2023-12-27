import Dialog from '@/presentaion/components/Dialog/Dialog.tsx'

interface IntroGuideFlowProp {
  step: number
  flow: string[]
  onIncrease: () => void
}
export default function IntroGuideFlow({ step, flow, onIncrease }: IntroGuideFlowProp) {
  const handleNextStep = () => {
    onIncrease()
  }

  return (
    <Dialog>
      <div style={{ position: 'relative', height: '50px', cursor: 'pointer' }} onClick={handleNextStep}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ whiteSpace: 'pre-wrap' }}>{flow[step]}</span>
          <span style={{ marginLeft: '110px' }}>[다음]</span>
        </div>
        <div
          style={{
            backgroundImage: 'url("/snowman.gif")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '60px',
            height: '60px',
            position: 'absolute',
            bottom: '-5px',
            right: '-10px',
          }}
        />
      </div>
    </Dialog>
  )
}
