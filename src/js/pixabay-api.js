import axios from 'axios';

async function fetchPhoto(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '46838066-e4c364792586fe965aa499300',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 15,
    },
  });
  return response;
}

export { fetchPhoto };
