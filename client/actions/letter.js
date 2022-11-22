import {
  getUniverseImage,
  getPoem,
  getPoemById,
  savePoem,
} from '../apis/universe'

export const SET_LETTER = 'SET_LETTER'
// export const ADD_BACKGROUND = 'ADD_BACKGROUND'
export const DEL_LETTER = 'DEL_LETTER'
// export const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND'
export const ADD_NAME = 'ADD_NAME'
export const DEL_NAME = 'DEL_NAME'
export const UPDATE_NAME = 'UPDATE_NAME'
export const ADD_DATE = 'ADD_DATE'

// set Letter from api and del letter
export function setLetter(letter) {
  return {
    type: 'SET_LETTER',
    payload: letter,
  }
}
export function addLetter(letter) {
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

// export function addDate(date) {
//   return {
//     type: 'ADD_DATE',
//     payload: date,
//   }
// }

// export function addNameTwo(newNameTwo) {
//   return {
//     type: 'ADD_NAME2',
//     payload: newNameTwo,
//   }
// }

export function fetchLetter() {
  return (dispatch) => {
    // console.log(dispatch)
    return getPoem().then((letter) => {
      // console.log(letter)
      dispatch(setLetter(letter))
    })
  }
}

export function saveLetter(newLetter) {
  return (dispatch) => {
    // console.log(dispatch)
    return savePoem(newLetter).then((letter) => {
      // console.log(letter)
      dispatch(addLetter(letter))
    })
  }
}
