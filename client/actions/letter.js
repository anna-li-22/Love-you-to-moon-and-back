import { getUniverseImage, getPoem, getPoemById } from '../apis/universe'

export const SET_LETTER = 'SET_LETTER'
// export const ADD_BACKGROUND = 'ADD_BACKGROUND'
export const DEL_LETTER = 'DEL_LETTER'
// export const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND'
export const ADD_NAME = 'ADD_NAME'
export const DEL_NAME = 'DEL_NAME'
export const UPDATE_NAME = 'UPDATE_NAME'

// set Letter from api and del letter
export function setLetter(letter) {
  return {
    type: 'SET_LETTER',
    payload: letter,
  }
}

// loading the name1 and name2
export function addName(newName) {
  return {
    type: 'ADD_NAME',
    payload: newName,
  }
}

// export function addNameTwo(newNameTwo) {
//   return {
//     type: 'ADD_NAME2',
//     payload: newNameTwo,
//   }
// }

export function fetchLetter() {
  return (dispatch) => {
    return getPoem().then((letter) => {
      dispatch(setLetter(letter))
    })
  }
}
