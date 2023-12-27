import { create } from 'zustand'

type PointStoreType = {
  point: number
  onIncrease: () => void
  onClear: () => void
}

const usePointStore = create<PointStoreType>((set) => ({
  point: 0,
  onIncrease: () =>
    set((state) => ({
      point: state.point + 1,
    })),
  onClear: () =>
    set(() => ({
      point: 0,
    })),
}))

export default usePointStore
