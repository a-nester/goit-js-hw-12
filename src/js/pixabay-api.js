import axios from 'axios';

const API_KEY = '43256839-6988dc73e83ff3bdf7562f6e8';
const BASE_URL = 'https://pixabay.com/api/';

export async function createFetch(searchValue, page) {
  try {
    const data = axios(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: page
      }});
    return data;
  } catch (error) {
    return error;
    
  }
}

