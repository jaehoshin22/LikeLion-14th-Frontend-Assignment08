import useCatStore from '../store/useCatStore'

function CatCard({ cat }) {
  const { setSelectedCat } = useCatStore()
  const breed = cat.breeds?.[0]

  return (
    <div
      onClick={() => setSelectedCat(cat)}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <img
        src={cat.url}
        alt="cat"
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <p className="text-sm text-gray-500">
          {breed ? breed.name : '고양이'}
        </p>
      </div>
    </div>
  )
}

export default CatCard