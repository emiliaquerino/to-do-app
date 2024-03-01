import { useState, useContext } from "react";
import Header from "./header";
import TaskInput from "./input";
import TaskList from "./task-list";
import TaskBar from "./taskbar";
import Footer from "./footer";
import { TodoContext } from "../contexts/TodoContext";

const Layout = () => {
  const { todoItems } = useContext(TodoContext);
  const [filter, setFilter] = useState("All");

  const onFilterChangeHandler = (filter) => {
    setFilter(filter);
  };

  const filteringTodos = todoItems?.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active" && !todo.isDone) return true;
    if (filter === "Completed" && todo.isDone) return true;
    return false;
  });

  const todos = filteringTodos;

  return (
    <div className="container">
      <Header />
      <TaskInput />
      <TaskList todoList={todos} filter={filter} />
      <TaskBar onFilterChange={onFilterChangeHandler} filter={filter} />
      <Footer />
    </div>
  );
};

export default Layout;
