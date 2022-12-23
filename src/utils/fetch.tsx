import axios from "axios";

const API_KEY = "30945884-5d04be7201908102dc9a782a9";
let page = 1;
const url = `https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export async function fetchImages() {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
  }
}
