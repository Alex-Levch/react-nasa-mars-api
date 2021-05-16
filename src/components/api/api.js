
const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers?';

const apiKey = process.env.REACT_APP_NASA_KEY;

const API_KEY = `api_key=${apiKey}`;

export const urls = {
  baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  token: API_KEY,
};

const request = async() => {
  const response = await fetch(`${BASE_URL}${API_KEY}`);
  const result = await response.json();

  return result.rovers;
};

export const getRovers = () => request();
