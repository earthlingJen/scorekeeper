import ACTIONS from './actions'
import { load } from './services'

const initialState = {
  players: load('players') || [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.DELETE_ALL_PLAYERS:
      return {
        ...state,
        players: [],
      }
    case ACTIONS.ADD_PLAYER:
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

    case ACTIONS.RESET_ROUND_SCORES:
      return {
        ...state,
        players: state.players.map(player => ({
          ...player,
          roundScore: 0,
        })),
      }
    case ACTIONS.RESET_SCORES:
      return {
        ...state,
        players: state.players.map(player => ({
          ...player,
          scores: [],
        })),
      }
    case ACTIONS.DELETE_PLAYER:
      return {
        ...state,
        players: [
          ...state.players.slice(0, action.payload.index),
          ...state.players.slice(action.payload.index + 1),
        ],
      }
    case ACTIONS.SAVE_ROUND:
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
    case ACTIONS.UPDATE_ROUNDSCORE:
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
    default:
      return state
  }
}
