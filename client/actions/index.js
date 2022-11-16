import { getNasaImage } from '../apis/universe'

export const SET_FRUITS = 'SET_FRUITS'

export function setImage(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchImage() {
  return (dispatch) => {
    return getNasaImage().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}
