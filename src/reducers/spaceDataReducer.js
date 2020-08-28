import * as ActionType from '../actions/ActionType'

let initialState = {
    spaceData: [],
}

const spaceDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SPACEPROGRAM_DATA: {
      return {
        ...state,
        spaceData: action.payload,
      }
    }
    case ActionType.SET_SPACEPROGRAM_DATA: {
      return { ...state, spaceData: action.payload }
    }
    default: {
      return state
    }
  }
}

export default spaceDataReducer
