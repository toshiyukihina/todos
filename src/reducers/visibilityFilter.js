import * as actions from '../actions'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;
  }
}

export default visibilityFilter
