import auth from '@react-native-firebase/auth';
// import {useColorScheme} from 'nativewind';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import {RootNavigationProp, Task} from '../..';
import {tasksCollection} from '../../firebase/firestore';

import {StyledView} from '../../styled';

function HomeScreen() {
  const user = auth().currentUser!;
  const {navigate} = useNavigation<RootNavigationProp>();
  const [tasks, setTasks] = React.useState<Task[]>([]);

  // useEffect(() => {
  //   tasksCollection.add({
  //     title: 'Tarea 3',
  //     description: 'Tarea 3',
  //     date: new Date(),
  //     completed: false,
  //     group: 'work',
  //     user: user.uid,
  //   });
  // }, [user.uid]);

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
              return {...data, date} as Task;
            }),
          );
        }
      }, console.error);
    return () => unsubscribe();
  }, [user.uid]);

  return (
    <StyledView className="flex-col flex-1 p-3 items-center">
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <StyledView className="flex-row self-start w-[100%] justify-between">
            <Text>{`${item.title} - ${item.date}`}</Text>
          </StyledView>
        )}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigate('CreateTask')}
      />
      {/*
       <StyledView className="flex-row self-start w-[100%] justify-between">
        <StyledPressable
          android_ripple={{color: '#00000000'}}
          className="items-center text-white rounded-xl w-12 h-12 active:bg-[#80808060] dark:active:bg-[#dddddd60]">
          <StyledImage
            source={menu}
            className="bg-[#80808040] rounded-xl w-12 h-12 dark:bg-[#dddddd40]"
          />
        </StyledPressable>

        <StyledSwitch
          value={colorScheme === 'dark'}
          onChange={toggleColorScheme}
          className=""
        />

        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className="bg-[#3F51B5] w-[30%] rounded-2xl text-white">
          <StyledText className="font-bold pt-2 text-center text-lg text-[#fff]">
            Logout
          </StyledText>
        </StyledPressable>
      </StyledView>
      <StyledView className="flex-col gap-y-4 w-[100%] justify-evenly">
        <StyledText className="text-center text-4xl font-bold text-gray-600 dark:text-teal-300">
          Hoy
        </StyledText>
        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage
            source={reloj}
            className="self-start rounded-xl w-12 h-12"
          />
          <StyledView className="-mt-1 w-[80%] flex-col justify-center">
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>
            <StyledText className="text-center text-[#fff]">
              8am - 9pm
            </StyledText>
          </StyledView>
        </StyledPressable>
        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage
            source={reloj}
            className="self-start rounded-xl w-12 h-12"
          />
          <StyledView className="-mt-1 w-[80%] flex-col justify-center">
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>
            <StyledText className="text-center text-[#fff]">
              8am - 9pm
            </StyledText>
          </StyledView>
        </StyledPressable>
        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage
            source={reloj}
            className="self-start rounded-xl w-12 h-12"
          />
          <StyledView className="-mt-1 w-[80%] flex-col justify-center">
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>
            <StyledText className="text-center text-[#fff]">
              8am - 9pm
            </StyledText>
          </StyledView>
        </StyledPressable>
        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className=" flex-row p-3 bg-[#98242860] self-center w-[90%] rounded-lg text-white">
          <StyledImage
            source={reloj}
            className="self-start rounded-xl w-12 h-12"
          />
          <StyledView className="-mt-1 w-[80%] flex-col justify-center">
            <StyledText className="font-bold text-center text-[#fff]">
              Tarea 1
            </StyledText>
            <StyledText className="text-center text-[#fff]">
              8am - 9pm
            </StyledText>
          </StyledView>
        </StyledPressable>
        <StyledText className="text-center text-lg text-gray-600 dark:text-teal-300">
          {name}
        </StyledText>
      </StyledView>
      <StyledView>
        <StyledPressable
          android_ripple={{color: '#fff'}}
          onPress={logoutGoogle}
          className="bg-[#3F51B5] self-center w-[90%] rounded-lg text-white">
          <StyledText className="font-bold p-8 text-center text-[#fff]">
            Universidad
          </StyledText>
        </StyledPressable>
      </StyledView> */}
    </StyledView>
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
