import axios from "axios";

const API_KEY = '43256839-6988dc73e83ff3bdf7562f6e8';
const BASE_URL = 'https://pixabay.com/api/';

export async function createFetch(searchWorld) {
    const param = new URLSearchParams({
    key: API_KEY,
    q: searchWorld,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
})
    const data = axios(`${BASE_URL}?${param}`)
    return data;
}
