import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilter } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchProps
)(TodoList)

export default VisibleTodoList
