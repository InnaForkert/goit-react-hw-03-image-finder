import axios from "axios";

export async function fetchImages(query: string, page: number) {
  const API_KEY = "30945884-5d04be7201908102dc9a782a9";
  const url = `https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&q=${query}`;
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
}
