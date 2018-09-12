import { createAction } from 'redux-actions'

const ACTIONS = {
  DELETE_ALL_PLAYERS: 'DELETE_ALL_PLAYERS',
  ADD_PLAYER: 'ADD_PLAYER',
  ADD_GAME: 'ADD_GAME',
  RESET_SCORES: 'RESET_SCORES',
  RESET_ROUND_SCORES: 'RESET_ROUND_SCORES',
  DELETE_PLAYER: 'DELETE_PLAYER',
  SAVE_ROUND: 'SAVE_ROUND',
  UPDATE_ROUNDSCORE: 'UPDATE_ROUNDSCORE',
}

// export function addPlayer(name) {
//   return {
//     type: ACTIONS.ADD_PLAYER,
//     payload: { name },
//   }
// }

// verkürzt durch redux-actions
export const addPlayer = createAction(ACTIONS.ADD_PLAYER)
export const addGame = createAction(ACTIONS.ADD_GAME)
export const deletePlayer = createAction(ACTIONS.DELETE_PLAYER)
export const deleteAllPlayers = createAction(ACTIONS.DELETE_ALL_PLAYERS)
export const resetScores = createAction(ACTIONS.RESET_SCORES)
export const resetRoundScores = createAction(ACTIONS.RESET_ROUND_SCORES)
export const saveRound = createAction(ACTIONS.SAVE_ROUND)
export const updateRoundscore = createAction(ACTIONS.UPDATE_ROUNDSCORE)

export default ACTIONS
