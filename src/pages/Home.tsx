import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import { View, StyleSheet } from 'react-native';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [dark, setDark] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldValues => [...oldValues, data])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldValues => oldValues.map(item => item.id === id ? ({
      ...item,
      done: !item.done,
    })
      : item
    ))
  }

  function handleRemoveTask(id: number) {
    setTasks(oldValues => oldValues.filter(item => item.id !== id));
  }

  function handleModeDark() {
    setDark(oldValues => !oldValues);
  }

  return (
    <>
      <Header dark={dark} onPress={handleModeDark}/>

      <View style={dark ? styles.containerDark : styles.container}>
        <TodoInput addTask={handleAddTask} dark={dark}/>

        <MyTasksList
          tasks={tasks}
          onPress={handleMarkTaskAsDone}
          onLongPress={handleRemoveTask}
          dark={dark}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  containerDark: {
    backgroundColor: '#1F1F1F',
    flex: 1,
  }
});