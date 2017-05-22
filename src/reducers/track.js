/* @flow */
import * as actionTypes from '../constants/actionTypes'

type State = {
  tracks: Array<Object>,
  activeTrack: ?Object
};

const initialState = {
  tracks: [],
  activeTrack: null
}

const setTracks = (state, action) => {
  const { tracks } = action
  return { ...state, tracks }
}

const setPlay = (state, action) => {
  const { track } = action
  return { ...state, activeTrack: track }
}

export default (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      return setTracks(state, action)
    case actionTypes.PLAY_TRACK:
      return setPlay(state, action)
  }
  return state
}
