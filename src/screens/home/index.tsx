import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {RootNavigationProp, Task} from '../..';
import {tasksCollection} from '../../firebase/firestore';
import TasksList from '../TasksList';

function HomeScreen() {
  const user = auth().currentUser!;
  const {navigate} = useNavigation<RootNavigationProp>();
  const [tasks, setTasks] = React.useState<Task[]>([]);

  useEffect(() => {
    const unsubscribe = tasksCollection
      .orderBy('date', 'desc')
      .where('user', '==', user.uid)
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
  }, [user.uid]);

  return (
    <>
      <TasksList tasks={tasks} />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigate('CreateTask')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 32,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
