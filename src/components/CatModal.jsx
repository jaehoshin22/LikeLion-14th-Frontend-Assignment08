import useCatStore from '../store/useCatStore'

function CatModal() {
  const { selectedCat, setSelectedCat } = useCatStore()

  if (!selectedCat) return null

  const breed = selectedCat.breeds?.[0]

  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedCat(null)}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={selectedCat.url}
          alt="cat"
          className="w-full h-56 object-cover"
        />
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-medium text-gray-800">
              {breed ? breed.name : '고양이'}
            </h2>
            <button
              onClick={() => setSelectedCat(null)}
              className="text-gray-300 hover:text-gray-500"
            >
              ✕
            </button>
          </div>

          {breed && (
            <div className="space-y-2 text-xs text-gray-400">
              <p>🌍 {breed.origin}</p>
              <p>⏳ {breed.life_span} years</p>
              <p>🐾 {breed.temperament}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CatModal