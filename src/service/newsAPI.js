import axios from 'axios';

async function getNews() {
  try {
    const query = "ircc";
    const country = "ca" ;
    const response = await axios.get(`https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&max=10&apikey=${import.meta.env.VITE_API_URL0}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}