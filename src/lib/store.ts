import create from 'zustand';

interface State {
    data: any[];
    setData: (newData: any[]) => void
}

const useStore = create<State>((set) => ({
    data: [],
    setData: (newData) => set({ data: newData }),
}))

export default useStore