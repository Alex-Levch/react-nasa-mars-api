// import ky from 'ky';
// import qs from 'qs';

// const client = ky.create({
//   prefixUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers'
// })

// const createUrl = ({ rover, ...params}) =>
//   `${rover}/photos?${qs.stringify({
//     api_key: process.env.REACT_APP_MARS_API_KEY,
//     ...params
//   })}`;

// const api = {
//   photos: {
//     read: ({ rover, camera, sol, page }) =>
//     client
//       .get(
//         createUrl({
//           rover,
//           camera,
//           sol,
//           page
//         })
//       )
//       .json()
//   }
// };

// export default api;

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers?';

const apiKey = process.env.REACT_APP_NASA_KEY;

const API_KEY = `api_key=${apiKey}`;

export const urls = {
  baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers',
  token: API_KEY,
}

// console.log(apiKey);
// console.log(API_KEY);

// https://api.nasa.gov/mars-photos/api/v1/rovers/
// curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

const request = async() => {
  const response = await fetch(`${BASE_URL}${API_KEY}`);
  const result = await response.json();

  return result.rovers;
};

export const getRovers = () => request();


const createPhotoUrl = ({ rover, sol, camera }) => `${BASE_URL}
  /${rover}/photos?sol=${sol}${API_KEY}`;

