import './App.css';
import { Header } from './Header';
import { Subheader } from './Subheader';
import { ListHeader } from './ListHeader';
import { ItemsList } from './ItemsList';
import { ListContainer } from './ListContainer';
import { TaskForm } from './TaskForm';
import { useState, useEffect } from 'react';

const App = () => {
  const [itemsList, setItemsList] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(itemsList));
  }, [itemsList]);

  const handleAddTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(), // Usando timestamp como ID único
    };
    setItemsList((prev) => [...prev, taskWithId]);
  };

  return (
    <div className="app">
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <TaskForm onSubmit={handleAddTask} />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={itemsList} />
      </ListContainer>
    </div>
  );
};

export default App;
