import * as ActionType from './ActionType'
import axios from 'axios'

export const geSpaceDataResponse = homeData => ({
  type: ActionType.GET_SPACEPROGRAM_DATA,
  payload: homeData,
})

export function getSpaceDataAction(filters) {
    let uri = `https://api.spaceXdata.com/v3/launches?limit=8${filters}`
  return dispatch => {
    axios.get(uri)
      .then(res => {
        dispatch(geSpaceDataResponse(res.data))
      })
      .catch(error => {
    })
  }
}
