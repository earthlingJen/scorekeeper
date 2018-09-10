export default function reducer(state, action = {}) {
  if (action.type === 'DELETE_ALL_PLAYERS') {
    return {
      ...state,
      players: [],
    }
  } else if (action.type === 'ADD_PLAYER') {
    return {
      ...state,
      players: [
        ...state.players,
        {
          name: action.payload.name,
          scores: [],
          roundScore: 0,
        },
      ],
    }
  } else if (action.type === 'RESET_SCORE') {
    return {
      players: state.players.map(player => ({
        ...player,
        scores: [],
      })),
    }
  } else if (action.type === 'DELETE_PLAYER') {
    return {
      ...state,
      players: [
        ...state.players.slice(0, action.payload.index),
        ...state.players.slice(action.payload.index + 1),
      ],
    }
  } else if (action.type === 'SAVE_ROUND') {
    return {
      ...state,

      players: state.players.map(player => {
        return {
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        }
      }),
    }
  } else if (action.type === 'UPDATE_ROUNDSCORE') {
    return {
      ...state,
      players: [
        ...state.players.slice(0, action.payload.index),
        {
          ...state.players[action.payload.index],
          roundScore:
            state.players[action.payload.index].roundScore +
            action.payload.value,
        },
        ...state.players.slice(action.payload.index + 1),
      ],
    }
  }
  return state
}
