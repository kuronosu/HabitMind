import {StyledComponent} from 'nativewind';
import React from 'react';
import {FlatList} from 'react-native';
import {Badge, Card} from 'react-native-paper';
import {Task} from '..';
import {toogleTask} from '../firebase/firestore';
import {groups} from '../groups';
import {StyledCard, StyledText} from '../styled';
import Centered from './Centered';

type Props = {
  tasks: Task[];
};

const TasksList = ({tasks}: Props) => (
  <FlatList
    data={tasks}
    // <Centered text="No hay tareas" /> 
    ListEmptyComponent={<StyledText className='text-gris-tormenta text-center text-2xl mt-4'>No hay tareas</StyledText>}
    renderItem={({item}) => (
      <StyledCard
        mode="elevated"
        className="m-4"
        onLongPress={() => toogleTask(item).catch(console.error)}>
        <Card.Title title={item.title} subtitle={groups[item.group].name} />
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
          <StyledText>{item.completed ? 'Realizada' : 'Pendiente'}</StyledText>
        </Card.Actions>
      </StyledCard>
    )}
  />
);

export default TasksList;
