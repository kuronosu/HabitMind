import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {StyledComponent} from 'nativewind';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Badge, Card, FAB} from 'react-native-paper';
import {RootNavigationProp, Task} from '../..';
import {tasksCollection, toogleTask} from '../../firebase/firestore';
import {groups} from '../../groups';

import {StyledCard, StyledText} from '../../styled';

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
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <StyledCard
            mode="elevated"
            className="m-4"
            onLongPress={() => toogleTask(item).catch(console.error)}>
            <Card.Title title={item.title} subtitle={groups[item.group]} />
            <Card.Content>
              <StyledText>{item.description}</StyledText>
              <StyledText>{item.date.toLocaleString('es')}</StyledText>
            </Card.Content>
            <Card.Actions>
              <StyledComponent
                className={item.completed ? 'bg-lime-600' : 'bg-rose-900'}
                component={Badge}
                size={14}
              />
              <StyledText>
                {item.completed ? 'Realizada' : 'Pendiente'}
              </StyledText>
            </Card.Actions>
          </StyledCard>
        )}
      />
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
