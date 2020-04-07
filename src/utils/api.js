import axios from "axios";

let BASE_URL = process.env.REACT_APP_OPENWEATHER_URI;
let API_KEY = process.env.REACT_APP_API_KEY;

const api = {
  city: {
    fetch: async function (name) {
      const { data, error } = await axios(
        `${BASE_URL}?q=${name}&appid=${API_KEY}`
      );

      if (error) {
        throw new Error(error);
      }
      return data;
    },
  },
};

export default api;
