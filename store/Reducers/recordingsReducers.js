const initialState = {
    recordings: [],
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'ADD_RECORDING':
        return {
          ...state,
          recordings: [...state.recordings, action.payload],
        };
      case 'REMOVE_RECORDING':
        return {
          ...state,
          recordings: state.recordings.filter(
            (recording) => recording.id !== action.payload
          ),
        };
      default:
        return state;
    }
  }
  