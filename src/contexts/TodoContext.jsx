import React, { createContext, useEffect, useReducer } from 'react';

export const TodoContext = createContext([]);

export const TODO_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  REORDER_TODOS: 'REORDER_TODOS',
};

const initialState = {
  todoItems: JSON.parse(localStorage.getItem('todos')) || [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return { ...state, todoItems: [...state.todoItems, action.payload] };
    case TODO_ACTION_TYPES.TOGGLE_COMPLETED:
      return { ...state, todoItems: action.payload };
    case TODO_ACTION_TYPES.DELETE_TODO:
      return { ...state, todoItems: action.payload };
    case TODO_ACTION_TYPES.CLEAR_COMPLETED:
      return { ...state, todoItems: action.payload };
    case TODO_ACTION_TYPES.REORDER_TODOS:
      return { ...state, todoItems: action.payload };
    default:
      return state;
  }
};

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    todoItems: state.todoItems,
    addTodoItem: (todo) => dispatch({ type: TODO_ACTION_TYPES.ADD_TODO, payload: todo }),
    deleteTodo: (todoId) => dispatch({ type: TODO_ACTION_TYPES.DELETE_TODO, payload: deleteItem(todoId) }),
    toggleIsDone: (todoId) => dispatch({ type: TODO_ACTION_TYPES.TOGGLE_COMPLETED, payload: toggleDone(todoId) }),
    clearFinishedTodos: () => dispatch({ type: TODO_ACTION_TYPES.CLEAR_COMPLETED, payload: clearCompleted() }),
    reorderList: (newList) => dispatch({ type: TODO_ACTION_TYPES.REORDER_TODOS, payload: newList }),
  };

  const toggleDone = (todoId) => {
    return state.todoItems.map((todo) => todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo);
  };

  const deleteItem = (todoId) => state.todoItems.filter((todo) => todo.id !== todoId);

  const clearCompleted = () => state.todoItems.filter((todo) => !todo.isDone);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todoItems))
  }, [state.todoItems])

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
