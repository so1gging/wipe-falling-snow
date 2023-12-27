import { useEffect, useState } from 'react'
import IntroGuideFlow from '@/presentaion/domains/IntroGuide/IntroGuideFlow.tsx'
import SnowWindow from '@/presentaion/view/window/SnowWindow.tsx'
import usePointStore from '@/stores/point/store.ts'

const flow = [
  '안녕? 나는 루피야.\n보시다시피 눈사람이지.',
  '내 친구 쵸파가\n나를 만들어줬어...',
  '쵸파와 난,\n둘도 없는 친구가 되었지...',
  '난 늘 같은 시간 찾아오는\n쵸파를 기다려...',
  '매일 같은 시간, 쵸파는 늘\n나와 같이 놀아주거든...',
  '오늘도 쵸파가 와줄거야...',
  '나랑 같이 쵸파를 기다려줄래?',
]

export default function Window() {
  const { onClear } = usePointStore()
  const [step, setStep] = useState(0)

  useEffect(() => {
    onClear()
    return () => onClear()
  }, [])

  const handleIncrease = () => setStep((prev) => prev + 1)
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      {step !== flow.length ? <IntroGuideFlow step={step} flow={flow} onIncrease={handleIncrease} /> : <SnowWindow />}
    </div>
  )
}
