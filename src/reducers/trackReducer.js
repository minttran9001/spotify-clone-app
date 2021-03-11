export const trackInitialState = {
    trackState: 'stop',
    playingTrack : null,
    isTrackLoading : true,
}
export const trackReducer = (state, action) => {
    switch (action.type) {
      case "GET_TRACK_BY_ID":
        return {
          ...state,
          trackState : 'stop',
          playingTrack : action.track,
          isTrackLoading : false,
        }
      case "PLAY_TRACK" :
        return {
          ...state,
          trackState : 'playing' 
        }
      case "PAUSE_TRACK" :
          return{
            ...state,
            trackState :'pause'
          }
      case "STOP_TRACK" :
        return{
          ...state,
          trackState : 'stop'
        }
      default:
        return state;
    }
  };