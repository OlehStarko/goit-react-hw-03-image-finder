import axios from 'axios';
const API_KEY = '29926194-45d6fad4a15cf545d178d6fd6';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};

export default fetchImages;
