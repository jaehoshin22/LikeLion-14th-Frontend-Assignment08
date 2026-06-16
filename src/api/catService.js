import axios from 'axios'

const API_KEY = import.meta.env.VITE_CAT_API_KEY
const BASE_URL = 'https://api.thecatapi.com/v1'
const headers = { 'x-api-key': API_KEY }

// 랜덤 고양이 가져오기
export const getCats = async ( limit = 100) => {
  const response = await axios.get(`${BASE_URL}/images/search`, {
    headers,
    params: { limit, has_breeds: 1, order: 'RANDOM' }
  })
  return response.data
}

// 품종 검색
export const searchBreeds = async (query) => {
  const response = await axios.get(`${BASE_URL}/breeds/search`, {
    headers,
    params: { q: query }
  })
  return response.data
}

// 품종별 고양이 사진
export const getCatsByBreed = async (breedId, limit = 100) => {
  const response = await axios.get(`${BASE_URL}/images/search`, {
    headers,
    params: { breed_ids: breedId, limit}
  })
  return response.data
}