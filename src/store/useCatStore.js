// zustand로 전역 상태 관리
import { create } from 'zustand'

const useCatStore = create((set) => ({
  cats: [],
  setCats: (cats) => set({ cats }),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectedCat: null,
  setSelectedCat: (cat) => set({ selectedCat: cat }),
}))

export default useCatStore