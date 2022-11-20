// const initialFoxState = [placeholderFox1, placeholderFox2]
import { ADD_NAME, DEL_NAME, UPDATE_NAME } from '../actions'
const initialFoxState = []

// const placeholderFox1 = {
//   foxName: 'Floop',
//   foxHunger: 10,
//   foxImage: 'image.jpg',
// }
// const placeholderFox2 = {
//   foxName: 'Flarp',
//   foxHunger: 10,
//   foxImage: 'image.jpg',
// }

const name = (state = initialFoxState, action) => {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case ADD_NAME:
      return [...state, payload]
    case DEL_NAME:
      return state.filter((fox) => fox.foxName !== payload.foxName)
    case UPDATE_NAME: {
      const newState = [...state].filter(
        (fox) => fox.foxName !== payload.foxName
      )
      // newState.filter((fox) => fox.foxName !== payload.foxName)
      newState.push(payload)
      return newState
    }
    default:
      return state
  }
}

export default name
