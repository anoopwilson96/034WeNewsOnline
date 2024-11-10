import axios from 'axios';






// export const getNews = async (query,country)=> {
//   try {

//     const response = await axios.get(`https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&max=15&apikey=${import.meta.env.VITE_API_URL0}`);
//     console.log(response);
//     return  response
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }






// Above API Keys have daily limit since its a free plan. So adding loop logic to switch API key when daily limit is reached. 

// List of API keys to cycle through
const apiKeys = [
  import.meta.env.VITE_API_URL0,
  import.meta.env.VITE_API_URL1,
  import.meta.env.VITE_API_URL2
];

// Function to get news with a retry mechanism for API key switching
export const getNews = async (query, country) => {
  for (let i = 0; i < apiKeys.length; i++) {
    try {
      const apiKey = apiKeys[i];
      console.log(`Trying API key ${i + 1}`);

      const response = await axios.get(`https://gnews.io/api/v4/search`, {
        params: {
          q: query,
          lang: 'en',
          country: country,
          max: 10,
          apikey: apiKey,
        },
      });

      // If successful, return the response
      console.log(response);
      return response;

    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Check if the response body indicates the request limit was reached
        const errorMessage = error.response.data?.errors?.[0] || '';
        if (errorMessage.includes('You have reached your request limit for today')) {
          console.warn(`API key ${i + 1} has reached its limit. Switching to the next key...`);
          // Continue to the next key in the loop
        } else {
          // If it's a different 403 error, log it and stop retrying
          console.error('403 error received:', errorMessage);
          break;
        }
      } else {
        // Log and return for any other errors
        console.error('Error fetching news:', error);
        break;
      }
    }
  }

  // If all keys are exhausted, log an error and return null
  console.error('All API keys have reached their request limits.');
  return null;
};