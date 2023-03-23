import {StyledComponent} from 'nativewind';
import React from 'react';
import {FlatList} from 'react-native';
import {Badge, Card} from 'react-native-paper';
import {Task} from '..';
import {toogleTask} from '../firebase/firestore';
import {groups} from '../groups';
import {StyledCard, StyledText, StyledView} from '../styled';
import Centered from './Centered';

type Props = {
  tasks: Task[];
  emptyText?: string;
};

const TasksList = ({tasks, emptyText = 'No hay tareas'}: Props) => (
  <StyledView className="mt-4">
    <FlatList
      data={tasks}
      ListEmptyComponent={<Centered text={emptyText} />}
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
            <StyledText>
              {item.completed ? 'Realizada' : 'Pendiente'}
            </StyledText>
          </Card.Actions>
        </StyledCard>
      )}
    />
  </StyledView>
);

export default TasksList;
