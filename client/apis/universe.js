import request from 'superagent'

// get data from database
const rootUrl = '/api/v1/poems'

export function getPoem() {
  return request.get(rootUrl).then((res) => {
    console.log(res.body)
    return res.body
  })
}
export function getPoemById(id) {
  return request.get(`${rootUrl}${id}`).then((res) => {
    //console.log(res.body)
    return res.body
  })
}

// *** get backimage for letter page ***
// external files
export function getUniverseImage() {
  return request.get(`https://go-apod.herokuapp.com/apod`).then((res) => {
    console.log(res.body)
    return res.body
  })
}

// examples
// export function addBackground(background) {
//   return request
//     .post(rootUrl)
//     .send(background)
//     .then((res) => {
//       // console.log(res.body)
//       return res.body
//     })
// }

// export function deleteBackground(id) {
//   return request.delete(`${rootUrl}${id}`).then((res) => {
//     console.log(res.body)
//     // console.log(res.body)
//     return res.body
//   })
// }
// export function updateTimeUsed(id, times_used) {
//   return request
//     .patch(`${rootUrl}${id}`)
//     .send({ times_used, last_used: new Date(Date.now()) })
//     .then((res) => {
//       console.log(res.body)
//       return res.body
//     })
