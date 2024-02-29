import React, { useContext, useState, useEffect } from 'react';
import TaskItem from './task-item';
import { TodoContext } from '../contexts/TodoContext';

const TaskList = ({ todoList, filter }) => {
  const [notice, setNotice] = useState('');
  const { todoItems } = useContext(TodoContext);

  const emptyListNotice = (filter) => {
    if (filter === 'All') {
      setNotice('You have no todos!');
    }
    if (filter === 'Active') {
      setNotice('You have no active todos');
    }
    if (filter === 'Completed') {
      setNotice('You have no completed todos!');
    }
  };

  useEffect(() => {
    emptyListNotice(filter);
  }, [filter]);

  return (
    <>
      {todoList.length > 0 ? (
        <div class="todo-list">
          {todoList.map((todo, index) => {
            return (
              <TaskItem
                key={todo.id}
                todo={todo}
                id={todo.id}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <div class="notice">
          <h2>{notice}</h2>
        </div>
      )}
    </>
  );
};

export default TaskList;
