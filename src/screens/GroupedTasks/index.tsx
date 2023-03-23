import auth from '@react-native-firebase/auth';
import React from 'react';
import {RootNavigationProp, Task} from '../..';
import {tasksCollection} from '../../firebase/firestore';
import {groups} from '../../groups';
import Centered from '../Centered';
import TasksList from '../TasksList';

const _List = ({group, userUID}: {group: string; userUID: string}) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  React.useEffect(() => {
    const unsubscribe = tasksCollection
      .orderBy('date', 'desc')
      .where('user', '==', userUID)
      .where('group', '==', group)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          setTasks(
            documentSnapshot.docs.map(doc => {
              const data = doc.data();
              const date = new Date(data.date.seconds * 1000);
              date.setMilliseconds(data.date.nanoseconds / 1000000);
              return {...data, date, id: doc.id} as Task;
            }),
          );
        }
      }, console.error);
    return () => unsubscribe();
  }, [group, userUID]);
  return <TasksList tasks={tasks} emptyText={`No hay tareas en ${group}`} />;
};

export default function GroupedTasks({
  route,
  navigation,
}: RootNavigationProp['GroupedTasks']) {
  const {group} = route.params;
  const user = auth().currentUser;

  React.useEffect(() => {
    navigation.setOptions({title: groups[group].name});
  }, [group, navigation]);

  if (!Object.hasOwnProperty.call(groups, group)) {
    return <Centered text="Grupo no encontrado" />;
  }
  if (!user) {
    return <Centered text="Debe iniciar sesión" />;
  }
  return <_List group={group} userUID={user.uid} />;
}
