const API_KEY = process.env.REACT_APP_CHARTER_API_KEY;

const baseURL = 'https://code-challenge.spectrumtoolbox.com/api/movies';

export const fetchAllMovies = async () => {
  return fetch(baseURL, {
    headers: {
      Authorization: `Api-Key ${API_KEY}`,
    },
  })
  .then(response => {
    handleErrors(response)
    return response.json()
  })
}

export const fetchMovieDetails = async (id) => {
  return fetch(`${baseURL}/${id}`, {
    headers: {
      Authorization: `Api-Key ${API_KEY}`,
    },
  })
  .then(response => {
    handleErrors(response)
    return response.json()
  })
}

const handleErrors = (response) => {
  if (!response.ok) {
    console.log(response);
    throw new Error()
  }
}