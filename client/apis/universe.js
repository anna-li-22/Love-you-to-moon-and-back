import request from 'superagent'

// *** get image ***
export function getNasaImage() {
  return request
    .get(`https://api.nasa.gov/planetary/apod/?date=${Date}`)
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}
