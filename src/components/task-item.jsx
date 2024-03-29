import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import check from '../assets/icon-check.svg';
import cross from '../assets/icon-cross.svg';

const TaskItem = ({ todo }) => {
  const { toggleIsDone, deleteTodo } = useContext(TodoContext);
  const { id, task, isDone } = todo;

  return (
    <div className="todo-container" key={id}>
      <div className="checkbox">
      <div className={`circle ${isDone ? 'done' : ''}`} onClick={() => toggleIsDone(id)}></div>
        <div className={`check ${isDone ? 'done' : ''}`} onClick={() => toggleIsDone(id)}>
          <img src={check} />
        </div>
      </div>
      <p className={`todo-text ${isDone ? 'done' : ''}`}>{task}</p>
      <div className="todo-delete">
        <img className="check-image" src={cross} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};

export default TaskItem;
