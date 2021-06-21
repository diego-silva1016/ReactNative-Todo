import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface FlatListHeaderComponentProps {
  dark: boolean;
}

function FlatListHeaderComponent({ dark }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={dark ? styles.headerDark : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  dark: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, dark }: MyTasksListProps) {
  return (
    <View style={dark ? styles.containerDark : styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.7}
              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
              style={item.done ?
                (dark ? styles.taskButtonDoneDark : styles.taskButtonDone)
                : styles.taskButton}
            >
              <View
                testID={`marker-${index}`}
                style={item.done ?
                  (dark ? styles.taskMarkerDoneDark : styles.taskMarkerDone) :
                  (dark ? styles.taskMarkerDark : styles.taskMarker)}
              />
              <Text
                style={item.done ? styles.taskTextDone : 
                  (dark ? styles.taskTextDark : styles.taskText)}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
        ListHeaderComponent={<FlatListHeaderComponent dark={dark} />}
        ListHeaderComponentStyle={{
          marginBottom: 20
        }}
        style={{
          marginHorizontal: 24,
          marginTop: 32
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  containerDark: {
    backgroundColor: '#1F1F1F',
  },
  headerDark: {
    color: '#BF4AD4',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10
  },
  taskMarkerDoneDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10
  },
  taskTextDark: {
    color: '#FFF',
  },
})