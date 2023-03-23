import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Task} from '../..';

export const tasksCollection = firestore().collection('Tasks');

export const createTask = async (task: Task) => {
  const user = auth().currentUser;
  if (!user) {
    throw new Error('User not logged in');
  }
  return await tasksCollection.add({...task, user: user.uid});
};

export const toogleTask = async (task: Task) => {
  if (!task.id) {
    throw new Error('Task id not defined');
  }
  return await tasksCollection
    .doc(task.id)
    .update({completed: !task.completed});
};
