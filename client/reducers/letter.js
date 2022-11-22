import { SET_LETTER, DEL_LETTER } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_LETTER:
      return payload
    case DEL_LETTER:
      return state.filter((poem) => poem.poem_id !== payload.poem_id)
    default:
      return state
  }
}

export default reducer
