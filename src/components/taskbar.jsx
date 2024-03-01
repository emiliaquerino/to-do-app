import React, { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TaskBar = ({ onFilterChange }) => {
  const [active, setActive] = useState(1);

  const { todoItems, clearFinishedTodos } = useContext(TodoContext);
  const filterCategories = [
    { id: 1, category: 'All' },
    { id: 2, category: 'Active' },
    { id: 3, category: 'Completed' },
  ];

  const activeTodoNumber = todoItems.filter((todo) => !todo.isDone).length;

  return (
    <div className="todo-info">
      <div className="items-left">
        <p>{activeTodoNumber} items left</p>
      </div>
      <div className="filters">
        {filterCategories.map((filteredCategory) => (
          <button className="btn-filter"
            key={filteredCategory.id}
            active={active === filteredCategory.id}
            onClick={() => {
              onFilterChange(filteredCategory.category),
                setActive(filteredCategory.id);
            }}
          >
            {filteredCategory.category}
          </button>
        ))}
      </div>
      <div className="clear-filter">
        <button className="btn-filter" onClick={clearFinishedTodos}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TaskBar;
