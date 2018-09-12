import { save } from './services'

export const saveToLocalStorage = store => next => action => {
  let result = next(action)
  const newState = store.getState()
  save('app', newState)
  return result
}
