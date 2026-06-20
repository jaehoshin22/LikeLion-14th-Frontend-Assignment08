import { useEffect } from 'react'
import useCatStore from '../store/useCatStore'
import { getCats, searchBreeds, getCatsByBreed } from '../api/catService'
import CatCard from '../components/CatCard'
import CatModal from '../components/CatModal'

function HomePage() {
  const {
    cats, setCats,
    searchQuery, setSearchQuery,
    selectedCat
  } = useCatStore()

  const fetchCats = async () => {
    const data = await getCats()
    setCats(data)
  }

  const fetchBySearch = async (query) => {
    const breeds = await searchBreeds(query)
    if (breeds.length > 0) {
      const data = await getCatsByBreed(breeds[0].id)
      setCats(data)
    } else {
      setCats([])
    }
  }

  useEffect(() => {
    if (searchQuery) {
      fetchBySearch(searchQuery)
    } else {
      fetchCats()
    }
  }, [searchQuery])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-5xl mx-auto">
      {/* 타이틀 */}
      <div className="text-center mb-10">
 <h1
  style={{ fontFamily: 'Paperozi' }}
  className="text-4xl font-medium text-pink-400 mb-2"
>
  🐱 Kittypidia
</h1>
        <p className="text-sm text-gray-400">고양이 품종을 검색하고 탐색해보세요</p>
      </div>

      {/* 검색 */}
      <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-5 py-3 bg-gray-50 max-w-lg mx-auto mb-10">
        <input
          type="text"
          placeholder="품종 이름 검색 (영어)"
          value={searchQuery}
          onChange={handleSearch}
          className="flex-1 bg-transparent text-sm text-gray-500 outline-none placeholder-gray-400"
        />
      </div>

      {/* 고양이 그리드 */}
      {cats.length === 0 ? (
        <p className="text-center text-gray-300 text-sm py-20">검색 결과가 없어요 🐾</p>
      ) : (
        <div className="grid grid-cols-4 gap-4 mb-10">
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      )}



      {/* 모달 */}
      {selectedCat && <CatModal />}
    </div>
  )
}

export default HomePage