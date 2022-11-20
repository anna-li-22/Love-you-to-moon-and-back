import { getUniverseImage, getPoem, getPoemById } from '../apis/universe'

export const SET_LETTER = 'SET_LETTER'
// export const ADD_BACKGROUND = 'ADD_BACKGROUND'
export const DEL_LETTER = 'DEL_LETTER'
// export const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND'

export function setLetter(letter) {
  return {
    type: 'SET_LETTER',
    payload: letter,
  }
}

export function fetchLetter() {
  return (dispatch) => {
    return getPoem().then((letter) => {
      dispatch(setLetter(letter))
    })
  }
}
