import { useContext } from 'react';

import { TaskContext } from '../contexts/task';

export const useTask = () => useContext(TaskContext);
