import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import {
  DatePickerModal,
  es,
  registerTranslation,
  TimePickerModal,
} from 'react-native-paper-dates';
import {RootNavigationProp} from '../..';

import {createTask} from '../../firebase/firestore';
import {StyledDropDown, StyledTextInput, StyledView} from '../../styled';

registerTranslation('es', es);
// import {type Task} from '../../';

const groups = [
  {label: 'Personal', value: 'personal'},
  {label: 'Universidad', value: 'university'},
  {label: 'Trabajo', value: 'work'},
  {label: 'Otros', value: 'other'},
];

export default function CreateTaskScreen() {
  // const [task, setTask] = React.useState<Task>({
  //   title: '',
  //   description: '',
  //   date: new Date(),
  //   completed: false,
  //   group: 'work',
  //   user: '',
  // });
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [openDate, setOpenDate] = React.useState(false);
  const [openTime, setOpenTime] = React.useState(false);
  const [group, setGroup] = React.useState('personal');
  const navigation = useNavigation<RootNavigationProp>();
  const [loading, setLoading] = React.useState(false);

  const clearAndGoBack = () => {
    setTitle('');
    setDescription('');
    setShowDropDown(false);
    setDate(undefined);
    setOpenDate(false);
    setOpenTime(false);
    setGroup('personal');
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <StyledView className="m-4">
      {/* <StyledText className="text-2xl font-bold">Create Task Screen</StyledText> */}
      <StyledView className="mb-4">
        <StyledDropDown
          label="Grupo"
          value={group}
          list={groups}
          mode="outlined"
          className="mb-4"
          setValue={setGroup}
          visible={showDropDown}
          onDismiss={() => setShowDropDown(false)}
          showDropDown={() => setShowDropDown(true)}
        />
      </StyledView>
      <StyledTextInput
        className="mb-4"
        label="Titulo"
        value={title}
        onChangeText={setTitle}
      />
      <StyledTextInput
        className="mb-4"
        label="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <StyledView className="mb-4">
        <Button
          onPress={() => setOpenDate(true)}
          uppercase={false}
          mode="outlined">
          {date
            ? (date as Date).toLocaleString('es')
            : 'Seleccionar fecha y hora'}
        </Button>
      </StyledView>

      <StyledView className="mb-4">
        <Button
          mode="contained-tonal"
          disabled={loading || !date || !title || !group}
          onPress={() => {
            if (loading || !date || !title || !group) {
              return;
            }
            setLoading(true);
            createTask({
              title,
              description,
              date,
              completed: false,
              group,
              user: '',
            }).then(clearAndGoBack);
          }}>
          {loading ? 'Cargando...' : 'Guardar'}
        </Button>
      </StyledView>
      <StyledView className="mb-4">
        <Button
          buttonColor="pink"
          mode="contained-tonal"
          onPress={clearAndGoBack}>
          Cancelar
        </Button>
      </StyledView>

      <TimePickerModal
        visible={openTime}
        locale="es"
        onConfirm={({hours, minutes}) => {
          setOpenTime(false);
          const newDate = new Date();
          if (date) {
            newDate.setTime(date.getTime());
          }
          newDate.setHours(hours);
          newDate.setMinutes(minutes);
          newDate.setSeconds(0);
          newDate.setMilliseconds(0);
          setDate(newDate);
        }}
        hours={12}
        minutes={14}
        onDismiss={() => setOpenTime(false)}
      />
      <DatePickerModal
        date={date}
        locale="es"
        mode="single"
        visible={openDate}
        onConfirm={({date: newDate}) => {
          setOpenDate(false);
          setOpenTime(true);
          if (newDate) {
            setDate(newDate);
          }
        }}
        onDismiss={() => setOpenDate(false)}
      />
    </StyledView>
  );
}
