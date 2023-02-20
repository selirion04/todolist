import { Routes, Route } from 'react-router';
import TaskListPage from './task-list/TaskListPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskListPage />} />
    </Routes>
  );
};

export default Routing;