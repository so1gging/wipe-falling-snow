import { useState } from 'react'
import Dialog from '@/presentaion/components/Dialog/Dialog.tsx'

export default function IntroGuideFlow() {
  const [step, setStep] = useState(0)
  const flow = [
    '안녕? 나는 루피야.\n보시다시피 눈사람이지.',
    '내 친구 쵸파가\n나를 만들어줬어...',
    '쵸파와 난,\n둘도 없는 친구가 되었지...',
    '난 늘 같은 시간 찾아오는\n쵸파를 기다려...',
    '매일 같은 시간, 쵸파는 늘\n나와 같이 놀아주거든...',
    '오늘도 쵸파가 와줄거야...',
    '나랑 같이 쵸파를 기다려줄래?',
  ]

  const handleNextStep = () => {
    if (step !== flow.length - 1) {
      setStep((prev) => prev + 1)
    }
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
