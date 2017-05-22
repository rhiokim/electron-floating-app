/* @flow */
import * as actionTypes from '../constants/actionTypes'

type SetTracksAction = {
  type: string,
  tracks: Array<Track>
};

type PlayTrackAction = {
  type: string,
  track: Track
};

type Action = SetTracksAction | PlayTrackAction;

export const setTracks = (tracks: Array<Track>): Action => {
  return {
    type: actionTypes.SET_TRACKS,
    tracks
  }
}

export const playTrack = (track: Track): Action => {
  return {
    type: actionTypes.PLAY_TRACK,
    track: track
  }
}
