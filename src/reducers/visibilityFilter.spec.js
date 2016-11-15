import visibilityFilter from './visibilityFilter'
import * as actions from '../actions'

describe('visibilityFilter reducer', () => {
  it('should handle initial state', () => {
    expect(
      visibilityFilter(undefined, {})
    ).toEqual('SHOW_ALL')
  })

  it('should handle SHOW_ALL', () => {
    expect(
      visibilityFilter('SHOW_COMPLETE', {
        type: actions.SET_VISIBILITY_FILTER,
        filter: 'SHOW_ALL'
      })
    ).toEqual('SHOW_ALL')
  })

  it('should handle SHOW_COMPLETE', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: actions.SET_VISIBILITY_FILTER,
        filter: 'SHOW_COMPLETE'
      })
    ).toEqual('SHOW_COMPLETE')
  })

  it('should handle SHOW_ACTIVE', () => {
    expect(
      visibilityFilter('SHOW_ALL', {
        type: actions.SET_VISIBILITY_FILTER,
        filter: 'SHOW_ACTIVE'
      })
    ).toEqual('SHOW_ACTIVE')
  })
})
