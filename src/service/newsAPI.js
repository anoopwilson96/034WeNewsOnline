import axios from 'axios';


export const getNews = async (query,country)=> {
  try {

    const response = await axios.get(`https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&max=10&apikey=${import.meta.env.VITE_API_URL0}`);
    console.log(response);
    return  response
  } catch (error) {
    console.error(error);
    return null;
  }
}



